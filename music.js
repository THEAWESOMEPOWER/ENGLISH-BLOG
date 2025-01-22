// music.js

window.onload = function() {
    const music = document.getElementById('background-music');
  
    // If the music was playing previously, resume it
    if (localStorage.getItem('musicPlaying') === 'true') {
      music.play();
    }
  
    // Listen for when the page is about to unload to save the music state
    window.onbeforeunload = function() {
      if (!music.paused) {
        localStorage.setItem('musicPlaying', 'true');
      } else {
        localStorage.setItem('musicPlaying', 'false');
      }
    };
  };
  