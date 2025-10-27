let timer = 60;
const countdownEl = document.getElementById("countdown");
const joinBtn = document.getElementById("joinButton");

// Button should already be visible
joinBtn.classList.add("visible");

setInterval(() => {
  timer--;
  if (timer <= 0) {
    timer = 60; // reset again
  }
  countdownEl.textContent = timer;
}, 1000);

