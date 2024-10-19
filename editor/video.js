// video.js

function setVideoSource() {
    if (window.matchMedia("(max-width: 640px)").matches) {
      alert('max-width: 640px');
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      alert('max-width: 640px');
    } else if (currentSrc !== defaultSrc) {
      alert('max-width: 640px');
    }
  }
