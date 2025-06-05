function unlockVault() {
  const input = document.getElementById("vault-key").value.trim();
  const msg = document.getElementById("vault-msg");
  const content = document.getElementById("vault-content");

  if (input === "auralyn-eternity") {
    content.style.display = "block";
    setTimeout(() => content.classList.add("active"), 100);
    document.body.classList.add("vault-unlocked");
    msg.style.color = "lime";
    msg.textContent = "Access granted. Welcome back, Tsukikage.";
    playUnlockSound();
  } else {
    msg.textContent = "Access denied. Incorrect key.";
    msg.style.color = "crimson";
    content.style.display = "none";
    content.classList.remove("active");
    document.body.classList.remove("vault-unlocked");
  }
}

function playUnlockSound() {
  const audio = new Audio("unlock.wav"); // Add unlock.wav to your project directory
  audio.volume = 0.4;
  audio.play();
}
