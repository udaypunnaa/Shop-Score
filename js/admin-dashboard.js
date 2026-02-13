(function () {
  function getStoredAdmin() {
    try {
      var raw = localStorage.getItem('shopScoreAdmin');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  var admin = getStoredAdmin();
  if (!admin) {
    window.location.href = 'admin-login.html';
    throw new Error('redirect');
  }

  var companyName = admin.companyName || admin.username || 'Admin';
  document.getElementById('company-title').textContent = companyName;
  var navCompany = document.getElementById('nav-company');
  if (navCompany) navCompany.textContent = companyName;

  var stats = typeof PLATFORM_STATS !== 'undefined' ? PLATFORM_STATS : {};
  document.getElementById('stat-total-customers').textContent = (stats.totalCustomers != null ? stats.totalCustomers : 0).toLocaleString();
  document.getElementById('stat-high-risk').textContent = (stats.highRiskCustomers != null ? stats.highRiskCustomers : 0).toLocaleString();
  document.getElementById('stat-average-score').textContent = stats.averageShopScore != null ? stats.averageShopScore : '—';
  document.getElementById('stat-total-orders').textContent = (stats.totalOrders != null ? stats.totalOrders : 0).toLocaleString();

  var customers = (typeof CUSTOMERS !== 'undefined' && Array.isArray(CUSTOMERS)) ? CUSTOMERS.slice() : [];
  var trustedCount = customers.filter(function (c) { return getScoreTier(c.score) === 'trusted'; }).length;
  var riskCount = customers.filter(function (c) { return getScoreTier(c.score) === 'risk'; }).length;
  var normalCount = customers.filter(function (c) { return getScoreTier(c.score) === 'normal'; }).length;
  document.getElementById('stat-trusted').textContent = trustedCount;

  var pie = typeof PIE_DISTRIBUTION !== 'undefined' ? PIE_DISTRIBUTION : { high: 45.2, medium: 31.5, low: 23.3 };
  document.getElementById('pie-high-pct').textContent = pie.high + '%';
  document.getElementById('pie-medium-pct').textContent = pie.medium + '%';
  document.getElementById('pie-low-pct').textContent = pie.low + '%';

  var pieWrap = document.getElementById('pie-chart-wrap');
  if (pieWrap) {
    var total = pie.high + pie.medium + pie.low;
    var conic = 'conic-gradient(var(--score-trusted) 0% ' + (pie.high / total * 100) + '%, var(--score-normal) ' + (pie.high / total * 100) + '% ' + ((pie.high + pie.medium) / total * 100) + '%, var(--score-risk) ' + ((pie.high + pie.medium) / total * 100) + '% 100%)';
    pieWrap.style.background = conic;
  }

  var maxBar = Math.max(trustedCount, normalCount, riskCount, 1);
  document.getElementById('bar-trusted').style.width = (trustedCount / maxBar * 100) + '%';
  document.getElementById('bar-normal').style.width = (normalCount / maxBar * 100) + '%';
  document.getElementById('bar-risk').style.width = (riskCount / maxBar * 100) + '%';

  var modules = typeof SYSTEM_MODULES !== 'undefined' && Array.isArray(SYSTEM_MODULES) ? SYSTEM_MODULES : [];
  var statusList = document.getElementById('status-list');
  if (statusList) {
    statusList.innerHTML = modules.map(function (m) {
      return '<li><span class="status-dot ' + (m.status || 'active') + '"></span> ' + (m.name || '') + '</li>';
    }).join('');
  }

  var logEntries = typeof ACTIVITY_LOG !== 'undefined' && Array.isArray(ACTIVITY_LOG) ? ACTIVITY_LOG : [];
  var activityList = document.getElementById('activity-list');
  if (activityList) {
    activityList.innerHTML = logEntries.map(function (e) {
      return '<li><span class="activity-time">' + (e.time || '') + '</span> ' + (e.message || '') + '</li>';
    }).join('');
  }

  var tbody = document.getElementById('customers-tbody');
  var searchInput = document.getElementById('search-customers');
  var filterBtns = document.querySelectorAll('.filter-btn');
  var currentFilter = 'all';

  function tierLabel(tier) {
    if (tier === 'trusted') return 'High';
    if (tier === 'normal') return 'Medium';
    return 'Low';
  }

  function renderRows(list) {
    tbody.innerHTML = list.map(function (c) {
      var tier = getScoreTier(c.score);
      var scoreDisplay = c.score != null ? c.score : '—';
      return '<tr>' +
        '<td>' + (c.id || '—') + '</td>' +
        '<td>' + (c.name || '—') + '</td>' +
        '<td>' + (c.orders != null ? c.orders : '—') + '</td>' +
        '<td>' + (c.cancellations != null ? c.cancellations : '—') + '</td>' +
        '<td><span class="score-cell ' + tier + '">' + scoreDisplay + '</span></td>' +
        '<td><span class="risk-badge ' + tier + '">' + tierLabel(tier) + '</span></td>' +
        '<td><button type="button" class="btn-action" data-id="' + (c.id || '') + '">View</button></td>' +
      '</tr>';
    }).join('');
  }

  function applyFilters() {
    var query = (searchInput.value || '').trim().toLowerCase();
    var filtered = customers.filter(function (c) {
      var nameMatch = !query || (c.name && c.name.toLowerCase().indexOf(query) >= 0) || (c.id && c.id.toLowerCase().indexOf(query) >= 0);
      var tier = getScoreTier(c.score);
      var tierMatch = currentFilter === 'all' || tier === currentFilter;
      return nameMatch && tierMatch;
    });
    renderRows(filtered);
  }

  searchInput.addEventListener('input', applyFilters);
  searchInput.addEventListener('search', applyFilters);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  applyFilters();
})();
