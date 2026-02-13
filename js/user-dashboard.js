(function () {
  var BENEFITS = {
    trusted: [
      'Fast delivery',
      'Extra discounts',
      'Priority support',
    ],
    normal: [
      'Standard delivery',
      'Limited COD',
    ],
    risk: [
      'No COD',
      'Advance payment required',
    ],
  };

  function getStoredUser() {
    try {
      var raw = localStorage.getItem('shopScoreUser');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function render(user) {
    var name = (user.username && user.username[0].toUpperCase() + user.username.slice(1)) || 'User';
    document.getElementById('welcome-title').textContent = 'Welcome, ' + name;
    var navWelcome = document.getElementById('nav-welcome');
    if (navWelcome) navWelcome.textContent = 'Logged in as ' + name;

    var score = typeof user.score === 'number' ? user.score : 0;
    var tier = getScoreTier(score);
    var pct = Math.min(100, Math.max(0, (score / 1000) * 100));

    var scoreEl = document.getElementById('score-value');
    scoreEl.textContent = score;
    scoreEl.className = 'score-value ' + tier;

    var fillEl = document.getElementById('score-meter-fill');
    fillEl.style.width = pct + '%';
    fillEl.className = 'score-meter-fill ' + tier;

    var badgeEl = document.getElementById('decision-badge');
    badgeEl.textContent = getScoreTierLabel(score);
    badgeEl.className = 'decision-badge ' + tier;

    var listEl = document.getElementById('benefits-list');
    var benefits = BENEFITS[tier] || [];
    listEl.innerHTML = benefits.map(function (b) { return '<li>' + b + '</li>'; }).join('');

    document.getElementById('metric-orders').textContent = user.orders != null ? user.orders : '—';
    document.getElementById('metric-cancellations').textContent = user.cancellations != null ? user.cancellations : '—';
    document.getElementById('metric-cod').textContent = user.codFailures != null ? user.codFailures : '—';
    document.getElementById('metric-return').textContent = user.returnRate != null ? user.returnRate + '%' : '—';
    document.getElementById('metric-loyalty').textContent = user.loyaltyScore != null ? user.loyaltyScore : '—';

    var orders = (typeof ORDER_HISTORY_BY_USER !== 'undefined' && user.username && ORDER_HISTORY_BY_USER[user.username]) ? ORDER_HISTORY_BY_USER[user.username] : [];
    var tbody = document.getElementById('order-history-tbody');
    if (tbody) {
      tbody.innerHTML = orders.length ? orders.map(function (o) {
        var statusClass = (o.status || '').toLowerCase().replace(/\s+/g, '-');
        return '<tr><td>' + (o.product || '—') + '</td><td>' + (o.date || '—') + '</td><td>' + (o.price || '—') + '</td><td><span class="order-status ' + statusClass + '">' + (o.status || '—') + '</span></td></tr>';
      }).join('') : '<tr><td colspan="4">No orders yet.</td></tr>';
    }

    var savings = (typeof SAVINGS_BY_USER !== 'undefined' && user.username && SAVINGS_BY_USER[user.username] != null) ? SAVINGS_BY_USER[user.username] : 0;
    var savingsEl = document.getElementById('savings-amount');
    if (savingsEl) savingsEl.textContent = '₹' + Number(savings).toLocaleString('en-IN');
  }

  var user = getStoredUser();
  if (!user) {
    window.location.href = 'user-login.html';
    throw new Error('redirect');
  }
  render(user);
})();
