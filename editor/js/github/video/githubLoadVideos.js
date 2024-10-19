

  function loadGithubVideos() {
    // alert('loadGithubVideos');

    removeAllVideoItems();

    const username = githubUser;
    const repoName = githubRepoName;
    const folderName = "media/videos/";
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}`;
    const accessToken = githubApi;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      
      console.log("Rate Limit Headers:");
      console.log("X-RateLimit-Limit:", response.headers.get("X-RateLimit-Limit"));
      console.log("X-RateLimit-Remaining:", response.headers.get("X-RateLimit-Remaining"));
      console.log("X-RateLimit-Used:", response.headers.get("X-RateLimit-Used"));
      console.log("X-RateLimit-Reset:", response.headers.get("X-RateLimit-Reset"));
      console.log("X-RateLimit-Resource:", response.headers.get("X-RateLimit-Resource"));
      
      return response.json();
    })
    .then(data => {
      console.log("JSON Response Data:", data);
      apiResponse = data.message;
      totalVideos = data.length;

      if (apiResponse === 'Not Found'){
        document.getElementById('video-media-sidebar-total').textContent = "0 video(s) found";
      }else{
        document.getElementById('video-media-sidebar-total').textContent = totalVideos + " video(s) found";
      }


      
      document.getElementById("video-media-sidebar-next-button").style.opacity = 1;
      const videoGridList = document.getElementById('video-media-sidebar-grid');
      
      for (const api of data) {

        var videoUrl = api.download_url;
        getVideoSize(videoUrl, function(intrinsicSize) {
        // Handle the intrinsic size as text
        const videoSize = intrinsicSize.width + 'x' + intrinsicSize.height;

        // var videoPath = api.url;
        // var videoSha = api.sha;
        const DivItems = document.createElement('div');
        const videoThumbnail = api.download_url;
        const videoSizeInBytes = api.size;
        const videoSizeInKB = Math.ceil(videoSizeInBytes / 1024);
        
        DivItems.id = api.sha;
        DivItems.className = 'video-media-sidebar-items';
        DivItems.innerHTML = `

          
          <video class="video-background" muted>
            <source src="${videoThumbnail}" type="video/mp4">
          </video>   
          
          <div class="video-github-item">  
            <p class="video-media-sidebar-url">${api.name}</p>
            <p class="video-media-sidebar-dimension">${videoSize}</p>
            <p class="video-media-sidebar-size">${videoSizeInKB} kB</p>
          </div>
        `;

        // Add a click event listener to the DivItems
        DivItems.addEventListener('click', function() {
         
            
            // const checkContentType = document.getElementById('video-single-type').textContent;
            // const getVideoId = document.getElementById('video-single-id').textContent;
            
            // if (checkContentType === 'video-fg'){
              
            //   const videoGrid = api.download_url;
            //   const videoToUpdate = document.getElementById(getVideoId);
            //   videoToUpdate.src = videoGrid; // Actualiza el src del elemento <video>
            //   videoToUpdate.load(); // Opcional: Carga el nuevo video

            //   const videoThumbnail = document.getElementById('video-single-thumbnail');
            //   const newVideoURL = videoGrid;
            //   videoThumbnail.setAttribute('src', newVideoURL);
            //   videoThumbnail.load();
              
            // }

            video_FG_Update(api.download_url);


      });
        videoGridList.appendChild(DivItems);

      });//END VIDEO SIZE
        
      }//EN FOR
    
    });
}
loadGithubVideos();

// async function deleteFile(videoSha , videoPath) {
//   const url = videoPath;
//   const token = githubApi;

//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//       'Accept': 'application/vnd.github.v3+json',
//     },
//     body: JSON.stringify({
//       message: 'Delete file',
//       committer: {
//         name: githubUser
//         // email: 'andre.roussille@gmail.com'
//       },
//       sha:videoSha,
//     })
//   };

//   try {
//     const response = await fetch(url, options);
    
//     if (response.ok) {
//       console.log('File deleted successfully');
//       console.log(videoSha);
//       removeVideofromDom(videoSha);
//     } else {
//       const error = await response.json();
//       console.error('Error deleting file:', error.message);
//     }
//   } catch (error) {
//     console.error('Error deleting file:', error.message);
//   }
// }


// function removeVideofromDom(id) {
//   const divElement = document.getElementById(id);

//   if (divElement) {
//     // Remove the div element from its parent node
//     divElement.parentNode.removeChild(divElement);

//     // Perform some action with the id value
//     console.log('Remove div ID:', id);
//     // You can add your own logic or function calls here
//   } else {
//     console.log('Div element not found');
//   }
// }

// Example usage
// removeVideofromDom('867de5f6f3d256f7891c7be5cdf782ab92ac60c2');


function removeAllVideoItems() {
  const videoGridList = document.getElementById('video-media-sidebar-grid');
  videoGridList.innerHTML = '';
}

function getVideoSize(videoUrl, callback) {
  var video = document.createElement('video');
  video.src = videoUrl;

  video.onloadedmetadata = function() {
    // Intrinsic size
    var intrinsicSize = {
      width: video.videoWidth,
      height: video.videoHeight,
    };

    // Pass the intrinsic size to the callback function if it's a function
    if (typeof callback === 'function') {
      callback(intrinsicSize);
    }
  };
}
