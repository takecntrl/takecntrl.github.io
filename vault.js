function unlockVault() {
  const input = document.getElementById("vault-key").value.trim();
  const msg = document.getElementById("vault-msg");
  const content = document.getElementById("vault-content");

  if (input === "auralyn-eternity") {
    content.style.display = "block";
    msg.style.color = "lime";
    msg.textContent = "Access granted. Welcome back, Tsukikage.";
  } else {
    msg.textContent = "Access denied. Incorrect key.";
    msg.style.color = "crimson";
    content.style.display = "none";
  }
} 
