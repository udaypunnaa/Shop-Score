"use client";

type ScoreMeterProps = {
  score: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
};

const getScoreColor = (score: number) => {
  if (score >= 800) return "text-score-high";
  if (score >= 600) return "text-score-high";
  if (score >= 400) return "text-score-medium";
  if (score >= 200) return "text-score-low";
  return "text-score-low";
};

const getStrokeColor = (score: number) => {
  if (score >= 800) return "#22c55e";
  if (score >= 600) return "#22c55e";
  if (score >= 400) return "#eab308";
  if (score >= 200) return "#ef4444";
  return "#ef4444";
};

export function ScoreMeter({
  score,
  max = 1000,
  size = "md",
  showLabel = true,
}: ScoreMeterProps) {
  const percentage = Math.min(100, (score / max) * 100);
  const stroke = getStrokeColor(score);
  const radius = size === "sm" ? 36 : size === "lg" ? 56 : 46;
  const strokeWidth = size === "sm" ? 6 : size === "lg" ? 10 : 8;
  const circumference = Math.PI * radius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size === "sm" ? 90 : size === "lg" ? 140 : 110}
        height={size === "sm" ? 55 : size === "lg" ? 75 : 65}
        className="overflow-visible"
      >
        <path
          d={`M ${strokeWidth} ${radius + strokeWidth} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        <path
          d={`M ${strokeWidth} ${radius + strokeWidth} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {showLabel && (
        <span className={`font-bold text-lg mt-1 ${getScoreColor(score)}`}>
          {score} / {max}
        </span>
      )}
    </div>
  );
}
