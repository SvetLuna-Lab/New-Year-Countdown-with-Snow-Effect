// js/main.js

function daysUntilNewYear() {
  const now = new Date();
  const year = now.getFullYear();
  const newYear = new Date(year + 1, 0, 1); // 1 January next year
  const diffMs = newYear - now;
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return days;
}

function renderCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const days = daysUntilNewYear();
  el.textContent = days.toString();
}

// initial render
renderCountdown();

setInterval(renderCountdown, 60 * 60 * 1000);
