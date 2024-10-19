function getRepoNameFromUrlParam(name) {
  const repoParams = new URLSearchParams(window.location.search);
  const repoEncoded = repoParams.get(name);
  
  if (!repoEncoded) return null;
  
  const repoDecoded = JSON.parse(atob(repoEncoded));
  
  for (const item of repoDecoded) {
    return item.repoName;
  }

  return null;
}

var getRepoName = getRepoNameFromUrlParam('id');


function openGithubImageSidebar() {
    image = document.getElementById("image-github-sidebar");
    image.style.bottom = "-135px";
    image.style.transition = "bottom 0.5s";
    image.offsetHeight;
    image.style.bottom = "0px";
  }
  
  function closeGithubImageSidebar() {
    image = document.getElementById("image-github-sidebar");
    image.style.bottom = "135px";
    image.style.transition = "right 0.5s";
    image.offsetHeight;
    image.style.bottom = "-135px";
  }

  function loadGithubImages() {
    console.log('loadGithubImages()');

    const repoName = githubRepoName;

    removeAllContent();

    const username = githubUser;
    const folderName = "media/images/";
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}`;
    // const accessToken = githubApi;

    fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${githubApi}`,
        'Accept': 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'If-None-Match': '' // Include this line to bypass caching           
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
      totalImages = data.length;

      if (apiResponse === 'Not Found'){
        document.getElementById('image-github-sidebar-total').textContent = "0 image(s) found";
      }else{
        document.getElementById('image-github-sidebar-total').textContent = totalImages + " image(s) found";
      }


      
      document.getElementById("image-github-sidebar-next-button").style.opacity = 1;
      const imageGridList = document.getElementById('image-github-sidebar-grid');
      for (const api of data) {

        var imageUrl = api.download_url;
        getImageSize(imageUrl, function(intrinsicSize) {
        // Handle the intrinsic size as text
        sizeText = intrinsicSize.width + 'x' + intrinsicSize.height;


       
        var imagePath = api.url;
        var imageSha = api.sha;
        const DivItems = document.createElement('div');
        const imageThumbnail = api.download_url;
        const imageSizeInBytes = api.size;
        const imageSizeInKB = Math.ceil(imageSizeInBytes / 1024);
        
        DivItems.id = api.sha;
        DivItems.className = 'image-github-sidebar-items';
        DivItems.innerHTML = `
          <img src="${imageThumbnail}" loading="lazy" class="thumbnail" onclick="imageClickGithub('${imageThumbnail}')">          
          <div class="image-github-item">  
            <p class="image-github-sidebar-url">${api.name}</p>
            <p class="image-github-sidebar-dimension">${sizeText}</p>
            <p class="image-github-sidebar-size">${imageSizeInKB} kB</p>
            <button id = "image-github-sidebar-delete" onclick="deleteImage('${imageSha}', '${imagePath}');"><img src="./assets/svg/icons/delete-white.svg"></button>
          </div>
        `;
        imageGridList.appendChild(DivItems);

      });
        
      }
    });
}

loadGithubImages();

function getImageSize(imageUrl, callback) {
  var image = new Image();
  image.src = imageUrl;

  image.onload = function() {
    // Intrinsic size
    var intrinsicSize = {
      width: image.naturalWidth,
      height: image.naturalHeight,
    };

    // Pass the intrinsic size to the callback function if it's a function
    if (typeof callback === 'function') {
      callback(intrinsicSize);
    }
  };
}

async function deleteImage(imageSha , imagePath) {
  const url = imagePath;
  const token = githubApi;

  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      message: 'Delete file',
      committer: {
        name: githubUser,
        email: 'icheff.com@gmail.com'
      },
      sha:imageSha,
    })
  };

  try {
    const response = await fetch(url, options);
    
    if (response.ok) {
      console.log('File deleted successfully');
      console.log(imageSha);
      removeImagefromDom(imageSha);
    } else {
      const error = await response.json();
      console.error('Error deleting file:', error.message);
    }
  } catch (error) {
    console.error('Error deleting file:', error.message);
  }
}


function removeImagefromDom(id) {
  const divElement = document.getElementById(id);

  if (divElement) {
    // Remove the div element from its parent node
    divElement.parentNode.removeChild(divElement);

    // Perform some action with the id value
    console.log('Remove div ID:', id);
    // You can add your own logic or function calls here
  } else {
    console.log('Div element not found');
  }
}

// Example usage
// removeImagefromDom('867de5f6f3d256f7891c7be5cdf782ab92ac60c2');


function removeAllContent() {
  const imageGridList = document.getElementById('image-github-sidebar-grid');
  imageGridList.innerHTML = '';
}


function imageClickGithub(imageURL){
  console.log("Clicked image URL:", imageURL);
  image_FG_Update(imageURL);


}

function checkImageTypeAll(){
  const imageTypeIs = localStorage.getItem('imageTypeIs');
  if (imageTypeIs === "image-fg"){
    clickAllSingleImage();
  } else if (imageTypeIs === "img-bg"){
    clickAllImage();
  }

}

function checkImageTypeXs(){
const imgSingleType = document.getElementById('image-single-type').textContent;
if (imgSingleType === "img-grid"){
clickXsSingleImage();
} else {
clickXsImage();
}
}