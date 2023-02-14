const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const timer = document.querySelector(".timer");

let intervalId;
let startTime;
let elapsedTime = 0;

startBtn.addEventListener("click", function() {
  startTime = Date.now();
  intervalId = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    updateTimer();
  }, 10);
});

stopBtn.addEventListener("click", function() {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  elapsedTime = 0;
  updateTimer();
});

function updateTimer() {
    const time = new Date(elapsedTime);
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const milliseconds = time.getMilliseconds().toString().padStart(3, "0");
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  }