// function videoSingleHtml() {
//   var editorDiv = document.getElementById("video-single-modal");
//   if (editorDiv) {
//     var content = `
    
//     <div id="video-single-container">
//         <div id="video-single-all">
//           <video id="video-single-thumbnail" autoplay="" loop="" muted="">
//             <source src="" type="video/mp4">
//           </video>
//           <input type="text" id="video-single-all-input">
//           <button id="video-single-all-save" onclick="updateAllVideo();">SAVE (ALL)</button>
//         </div>

//         <div id="video-single-libraries">
//           <button id="videoWebSidebar" onclick="openWebVideos()">
//             <span class="tooltiptext-right">Web</span>
//           </button>
//           <button id="videoMediaSidebar" onclick="openMediaVideos()">
//             <span class="tooltiptext-right">Media</span>
//           </button>
//         </div>
    
//         <button onclick="hideVideoSingleModal(); closeVideoSidebars()" class="video-single-close">
//           <img src="./assets/svg/icons/close.svg">
//         </button>

//         <p id="video-single-id">ID</p>
//         <p id="video-single-type">Type</p>
//         <p id="video-single-url">URL</p>

//     </div>
//     `;
    
//     editorDiv.innerHTML = content;

    
//   } else {
//     console.error("Editor element not found.");
//   }
// }
// videoSingleHtml();

// function getVideoIdOnClick() {
  
//   const grid = document.getElementById('grid-body');
//   grid.addEventListener('click', function(event) {
//     if (event.target.tagName === 'VIDEO' && event.target.getAttribute('data-type') === 'video-fg') {
//       const videoId = event.target.id;
//       const videoUrl = event.target.src;

//       const vidSingleID = document.getElementById('video-single-id');
//       vidSingleID.textContent = videoId;

//       const vidSingleType = document.getElementById('video-single-type');
//       vidSingleType.textContent = 'video-fg';

//       const vidSingleUrl = document.getElementById('video-single-url');
//       vidSingleUrl.textContent = videoUrl;

//       const videoThumbnail = document.getElementById('video-single-thumbnail');
//       const newVideoURL = videoUrl;
//       videoThumbnail.setAttribute('src', newVideoURL);
//       videoThumbnail.load();
//       loadDefaultVideo();
//       loadGithubVideos();
      
//       localStorage.setItem('videoTypeIs','video-fg');
//       localStorage.setItem('videoIdIs',videoId);
//       localStorage.setItem('videoUrlIs',videoUrl);


//       showVideoSingleModal();

//     }
//   });
// }

// document.addEventListener('load', function() {getVideoIdOnClick();});
// getVideoIdOnClick();

//   function showVideoSingleModal() {
//     var divModal = document.getElementById("video-single-modal");
//     divModal.style.display = "grid";
//   }
//   function hideVideoSingleModal() {
//     var divModal = document.getElementById("video-single-modal");
//     divModal.style.display = "none";
//   }

//   function getVideoUrl() {
    
//     const videoID = document.getElementById('video-single-id').textContent;
//     console.log('videoID:', videoID);
    
//     const videoThumbnail = document.getElementById(videoID);
//     console.log('videoThumbnail:', videoThumbnail);
    
//     // const videoSingleThumb = document.getElementById('video-single-thumbnail');
//     // console.log('videoSingleThumb:', videoSingleThumb);


//     if (videoThumbnail) {
//         const sourceElement = videoThumbnail.querySelector('source');
//         if (sourceElement) {
          
//             updateVideoSrc('video-single-thumbnail', sourceElement.src);
//             console.log('URL: ' + sourceElement.src);

//         } else {
//             console.log('No se encontró el elemento source.');
//         }
//     } else {
//         console.log('No se encontró el elemento video o video-single-thumbnail.');
//     }
// }


//   function updateVideoSrc(videoID, videoURL) {
//     const videoThumbnail = document.getElementById(videoID);

//     if (videoThumbnail) {
//         const sourceElement = videoThumbnail.querySelector('source');
        
//         if (sourceElement) {
//             sourceElement.src = videoURL;
//             videoThumbnail.load();
            
//             videoThumbnail.addEventListener('loadeddata', function() {
//                 console.log('Video is loaded and ready to play.');
//                 videoThumbnail.play();
//             });
//         } else {
//             console.error('No se encontró el elemento source.');
//         }
//     } else {
//         console.error('No se encontró el elemento de video con el ID especificado.');
//     }
// }

  
  
  
  
  
