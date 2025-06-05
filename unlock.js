// unlock.js — Shared Konami Unlock + Tracer Logic

let konamiCode = [38,38,40,40,37,39,37,39,66,65];
let input = [];
window.echoUnlocked = false;
let traceTimer;
let secondsLeft = 300;

function startTraceCountdown() {
  const timerDiv = document.getElementById("trace-timer");
  if (!timerDiv) return;

  traceTimer = setInterval(() => {
    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const secs = String(secondsLeft % 60).padStart(2, '0');
    timerDiv.textContent = `Tracing Target: ${mins}:${secs}`;

    secondsLeft--;
    if (secondsLeft < 0) {
      clearInterval(traceTimer);
      timerDiv.textContent = "Target Traced. Signal Locked.";
      document.body.classList.add("traced");
    }
  }, 1000);
}

window.addEventListener('keydown', (e) => {
  input.push(e.keyCode);
  if (input.length > konamiCode.length) input.shift();

  if (input.toString() === konamiCode.toString()) {
    window.echoUnlocked = true;

    const banner = document.getElementById("warning-banner");
    const terminal = document.getElementById("terminal-block");
    const echo = document.getElementById("echo-signal");

    if (banner) banner.innerHTML = "[SCP-████] DECRYPTION ACTIVE — ECHO SIGNAL RELEASED";
    if (terminal) terminal.style.display = 'none';
    if (echo) echo.style.display = 'block';

    document.body.classList.add("glitch");
    startTraceCountdown();
  }
});
