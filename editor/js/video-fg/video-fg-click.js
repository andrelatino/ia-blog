function video_FG_Click() {
    
    const grid = document.getElementById('grid-body');
    // Asegurar que no se dupliquen los oyentes de eventos
    grid.removeEventListener('click', video_FG_Event);
    grid.addEventListener('click', video_FG_Event);
}

function video_FG_Event(event) {

    if (event.target.tagName === 'VIDEO' && event.target.getAttribute('data-type') === 'video-fg' && event.target.id) {
      
      show_Video_Modal();

      const videoSingleID = document.getElementById('video-fg-id');
      videoSingleID.textContent = event.target.id;
      
      const videoSingleType = document.getElementById('video-fg-type');
      videoSingleType.textContent = 'video-fg';
      
      const videoSingleUrl = document.getElementById('video-fg-url');
      videoSingleUrl.textContent = event.target.currentSrc; // Usar currentSrc para obtener la URL actual

      // Seleccionar el video por su ID
      const video = document.getElementById("video-all-thumbnail");
      // Establecer correctamente el atributo 'src' del video
      video.src = videoSingleUrl.textContent;

      // Log opcional para confirmar
      console.log("video src has been updated to:", video.src);

      console.log('video-fg ID:' + event.target.id);
      console.log('video-fg URL:' + event.target.currentSrc);
    }
}

function show_Video_Modal() {
    var divModal = document.getElementById("video-fg-modal");
    divModal.style.display = "grid";
}
function hide_Video_Modal() {
    var divModal = document.getElementById("video-fg-modal");
    divModal.style.display = "none";
}