function openSettings() {
  // --- Play sound once ---
  const audio = document.getElementById("clickSound");
  audio.currentTime = 0; // rewind to start
  audio.play();          // play once per click

}