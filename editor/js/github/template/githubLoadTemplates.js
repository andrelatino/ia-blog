

function openGithubTemplateSidebar() {
    template = document.getElementById("template-github-sidebar");
    template.style.right = "-300px";
    template.style.transition = "right 0.5s";
    template.offsetHeight;
    template.style.right = "75px";
  }
  
  function closeGithubTemplateSidebar() {
    template = document.getElementById("template-github-sidebar");
    template.style.right = "300px";
    template.style.transition = "right 0.5s";
    template.offsetHeight;
    template.style.right = "-300px";
  }

//   function loadGithubTemplates() {

//     removeAllContent();

//     const username = "icheff";
//     const repoName = "enanitos";
//     const folderName = "media/images/";
//     const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}`;
//     const accessToken = "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";

//     fetch(apiUrl, {
//       headers: {
//         Authorization: `${accessToken}`
//       }
//     })
//     .then(response => {
      
//       console.log("Rate Limit Headers:");
//       console.log("X-RateLimit-Limit:", response.headers.get("X-RateLimit-Limit"));
//       console.log("X-RateLimit-Remaining:", response.headers.get("X-RateLimit-Remaining"));
//       console.log("X-RateLimit-Used:", response.headers.get("X-RateLimit-Used"));
//       console.log("X-RateLimit-Reset:", response.headers.get("X-RateLimit-Reset"));
//       console.log("X-RateLimit-Resource:", response.headers.get("X-RateLimit-Resource"));
      
//       return response.json();
//     })
//     .then(data => {
//       console.log("JSON Response Data:", data);
//       apiResponse = data.message;
//       totalTemplates = data.length;

//       if (apiResponse === 'Not Found'){
//         document.getElementById('template-github-sidebar-total').textContent = "0 template(s) found";
//       }else{
//         document.getElementById('template-github-sidebar-total').textContent = totalTemplates + " template(s) found";
//       }


      
//       document.getElementById("template-github-sidebar-next-button").style.opacity = 1;
//       const imageGridList = document.getElementById('template-github-sidebar-grid');
//       for (const api of data) {

//         var imageUrl = api.download_url;
//         getTemplateSize(imageUrl, function(intrinsicSize) {
//         // Handle the intrinsic size as text
//         sizeText = intrinsicSize.width + 'x' + intrinsicSize.height;


       
//         var imagePath = api.url;
//         var imageSha = api.sha;
//         const DivItems = document.createElement('div');
//         const imageThumbnail = api.download_url;
//         const imageSizeInBytes = api.size;
//         const imageSizeInKB = Math.ceil(imageSizeInBytes / 1024);
        
//         DivItems.id = api.sha;
//         DivItems.className = 'template-github-sidebar-items';
//         DivItems.innerHTML = `
//           <img src="${imageThumbnail}" loading="lazy" width="170px" onclick="addGithubTemplateToBg('${imageThumbnail}')">          
//           <div class="template-github-item">  
//             <p class="template-github-sidebar-url">${api.name}</p>
//             <p class="template-github-sidebar-dimension">${sizeText}</p>
//             <p class="template-github-sidebar-size">${imageSizeInKB} kB</p>
//             <button id = "template-github-sidebar-delete" onclick="deleteFile('${imageSha}', '${imagePath}');"><img src="./assets/svg/icons/delete-white.svg"></button>
//           </div>
//         `;
//         imageGridList.appendChild(DivItems);

//       });
        
//       }
//     });
// }

// function getTemplateSize(imageUrl, callback) {
//   var template = new Template();
//   template.src = imageUrl;

//   template.onload = function() {
//     // Intrinsic size
//     var intrinsicSize = {
//       width: template.naturalWidth,
//       height: template.naturalHeight,
//     };

//     // Pass the intrinsic size to the callback function if it's a function
//     if (typeof callback === 'function') {
//       callback(intrinsicSize);
//     }
//   };
// }

// async function deleteFile(imageSha , imagePath) {
//   const url = imagePath;
//   const token = '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';

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
//         name: 'andrelatino',
//         email: 'andre.roussille@gmail.com'
//       },
//       sha:imageSha,
//     })
//   };

//   try {
//     const response = await fetch(url, options);
    
//     if (response.ok) {
//       console.log('File deleted successfully');
//       console.log(imageSha);
//       removeTemplatefromDom(imageSha);
//     } else {
//       const error = await response.json();
//       console.error('Error deleting file:', error.message);
//     }
//   } catch (error) {
//     console.error('Error deleting file:', error.message);
//   }
// }


// function removeTemplatefromDom(id) {
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

// // Example usage
// // removeTemplatefromDom('867de5f6f3d256f7891c7be5cdf782ab92ac60c2');


// function removeAllContent() {
//   const imageGridList = document.getElementById('template-github-sidebar-grid');
//   imageGridList.innerHTML = '';
// }

function loadTemplates() {
  // Define the URL for the JSON data
  const apiUrl = 'https://icheff.github.io/templates/sections.json';

  // Use the Fetch API to get the JSON data
  fetch(apiUrl)
      .then(response => {
          // Check if the response is successful (status code 200)
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          // Parse the JSON data from the response
          return response.json();
      })
      .then(data => {
          const imageGridList = document.getElementById('template-github-sidebar-grid');
          for (const api of data) {
              const DivItems = document.createElement('div');
              const baseUrl = 'https://icheff.github.io/templates';
              DivItems.id = api.id;
              DivItems.className = 'template-github-sidebar-items';
              DivItems.innerHTML = `
                  <img src="${baseUrl + api.thumb}" loading="lazy" width="170px">          
                  <div class="template-github-item">  
                    <p class="template-github-sidebar-url">Section ID : ${api.id}</p>
                    <p>Tags : ${api.tags}</p>
                    <button class="getIdButton" style="text-align:center;">Add Section</button>
                  </div>
              `;
              imageGridList.appendChild(DivItems);

              // Attach event listener to the button
              DivItems.querySelector('.getIdButton').addEventListener('click', function() {
                //   alert(api.url);
                  sectionImportByUrl(api.url);
                //   importPageFromURL(api.url);
              });
          }
      })
      .catch(error => {
          // Log any errors to the console
          console.error('There was a problem with the fetch operation:', error.message);
      });
}

// loadTemplates() ;