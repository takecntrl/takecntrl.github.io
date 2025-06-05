function unlockVault(boxName) {
  const pass = document.getElementById("vault-pass").value.trim();
  const msg = document.getElementById("vault-msg");
  const content = document.getElementById("vault-content");

  if (pass === "auralyn-eternity") {
    document.body.classList.add("vault-unlocked");
    content.style.display = "block";
    setTimeout(() => content.classList.add("active"), 100);
    
    if (msg) {
      msg.style.color = "lime";
      msg.textContent = "Access granted. Welcome back, Tsukikage.";
    }

    document.getElementById("vault-locked").style.display = "none";
    playUnlockSound();
  } else {
    if (msg) {
      msg.textContent = "Access denied. Incorrect key.";
      msg.style.color = "crimson";
    }

    content.classList.remove("active");
    document.body.classList.remove("vault-unlocked");
    content.style.display = "none";
  }
}

function playUnlockSound() {
  const audio = new Audio("/unlock.wav");
  audio.volume = 0.4;
  audio.play();
}
