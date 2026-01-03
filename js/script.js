let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let optionsBtn = document.getElementById("options-btn");
let timerText = document.getElementById("timer-txt");
let quoteText = document.getElementById("quote-txt");

const stateButtons = document.querySelectorAll(".mode-btn");
  stateButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      stateButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });