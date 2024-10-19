 
function videoModal() {

    showVideoModal();

    var editorDiv = document.getElementById("video-modal");
  
   
    if (editorDiv) {
      var content = `
      
      <div id="video-container">
  
            <div id="video-github-buttons">
            
              <button id="video-drag"><img src="./assets/svg/icons/drag.svg"></button>
              
              <button id="video-btn-all" onclick="videoAllButton();">PC</button>
              
                       
            </div>
            
            
            <div id="video-all">          
                <video id="video-thumbnail" autoplay="" loop="" muted="">
                  <source src="" type="video/mp4">
                </video>       
                <input type="text" id="video-all-input"> 
                <button id="video-all-save" onclick="updateAllVideo();">SAVE (ALL)</button>  
            </div>

            <div id = "video-libraries">
              <button id="videoWebSidebar" onclick="openWebVideos()">
                <span class="tooltiptext-right">Web</span>	
              </button>
              
              <button id="videoMediaSidebar" onclick="openMediaVideos()">
                <span class="tooltiptext-right">Media</span>
              </button>	

            </div>  
            
        </div>

            <button onclick="hideVideoModal(); closeVideoSidebars()" class="video-close">
                <img src="./assets/svg/icons/close.svg">
            </button>
         
        
      </div>  
      `;
      
      editorDiv.innerHTML = content;
      var imageModal = document.querySelector("#video-modal");
      imageModal.className = "mobile-box";
      var imageDrag = document.querySelector("#video-drag");
      makeElementDraggable(imageModal, imageDrag);
  
      
    } else {
      console.error("Editor element not found.");
    }
  }
  
    function showVideoModal() {
      var divModal = document.getElementById("video-modal");
      divModal.style.display = "grid";
    }
    function hideVideoModal() {
      var divModal = document.getElementById("video-modal");
      divModal.style.display = "none";
    }

    function getVideoUrl() {
      
      const videoID = document.getElementById('video-id').textContent;
      console.log('videoID:', videoID);
      
      const videoElement = document.getElementById(videoID);
      console.log('videoElement:', videoElement);
      
      // const videoThumb = document.getElementById('video-thumbnail');
      // console.log('videoThumb:', videoThumb);

  
      if (videoElement) {
          const sourceElement = videoElement.querySelector('source');
          if (sourceElement) {
            
              updateVideoSrc('video-thumbnail', sourceElement.src);
              console.log('URL: ' + sourceElement.src);

          } else {
              console.log('No se encontró el elemento source.');
          }
      } else {
          console.log('No se encontró el elemento video o video-thumbnail.');
      }
  }
  

    function updateVideoSrc(videoID, videoURL) {
      const videoElement = document.getElementById(videoID);
  
      if (videoElement) {
          const sourceElement = videoElement.querySelector('source');
          
          if (sourceElement) {
              sourceElement.src = videoURL;
              videoElement.load();
              
              videoElement.addEventListener('loadeddata', function() {
                  console.log('Video is loaded and ready to play.');
                  videoElement.play();
              });
          } else {
              console.error('No se encontró el elemento source.');
          }
      } else {
          console.error('No se encontró el elemento de video con el ID especificado.');
      }
  }
  
    
    
    
    
    