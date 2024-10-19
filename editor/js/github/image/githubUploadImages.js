var repoName;

function getUrlParameterX(name) {
  const repoParams = new URLSearchParams(window.location.search);
  return repoParams.get(name);
}
const repoEncoded = getUrlParameterX('id');
const repoDecoded = JSON.parse(atob(repoEncoded));

for (const item of repoDecoded) { 
  var repoName = item.repoName;
}

function githubUploadImage() {
  const repo = repoName;
  const imageGithubModal = document.getElementById("image-github-modal");
  imageGithubModal.style.visibility = "visible";
  imageGithubModal.style.display = "grid";

  document.getElementById("image-github-upload-button").addEventListener("click", function() {
    const fileInput = document.getElementById("image-github-input");
    const file = fileInput.files[0];
    const progressBar = document.getElementById("progress-bar");
    const uploadButton = document.getElementById("image-github-upload-button");
    uploadButton.style.background = "blue";
    uploadButton.style.color = "white";
    uploadButton.textContent = "Uploading your image";
    const reader = new FileReader();

    reader.onloadend = function() {
      const imageContent = reader.result.split(",")[1];
      const username = githubUser;
      const repoName = repo;
      const folderName = "media/images/";
      const width = parseInt(document.getElementById('sizeWidthInput').value);
      const height = parseInt(document.getElementById('sizeHeightInput').value);

      // Create an image element and load the image from the file
      const image = new Image();
      
      image.src = window.URL.createObjectURL(file);

      image.onload = function() {
        // Determine whether to use original size or specified size
        const useOriginalSize = isNaN(width) || isNaN(height);

        // Create a temporary canvas for cropping
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        let fileNameWithSize;

        if (useOriginalSize) {
          // Use original size and add "_original" to the filename
          fileNameWithSize = file.name.replace(/\.(jpg|jpeg|png|gif|svg)$/i, `_original.$1`);
          tempCanvas.width = image.width;
          tempCanvas.height = image.height;
          tempCtx.drawImage(image, 0, 0, image.width, image.height);
        } else {
          // Use specified size and add the size to the filename
          fileNameWithSize = file.name.replace(/\.(jpg|jpeg|png|gif|svg)$/i, `_${width}x${height}.$1`);
          tempCanvas.width = width;
          tempCanvas.height = height;
          tempCtx.drawImage(image, 0, 0, width, height);
        }

        const croppedImageContent = tempCanvas.toDataURL('image/jpeg', 1.0).split(",")[1]; // Adjust quality as needed

        const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}${fileNameWithSize}`;
        const accessToken = githubApi;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        };
        const payload = JSON.stringify({
          message: "Upload image",
          content: croppedImageContent,
        });

        fetch(apiUrl, {
          method: "PUT",
          headers,
          body: payload,
        })
        .then(response => {
          if (response.status === 201) {
            githubImageStatus201();
          } else if (response.status === 422) {
            githubImageStatus422();
          } else {
            githubImageStatusError();
          }

          response.json().then(data => {
            const downloadUrl = data.content.download_url;
            console.log("Download Link:", downloadUrl);
            // You can use downloadUrl as needed
          });

        })
        .catch(error => {
          uploadButton.textContent = `ERROR: Image already exists in your media`;
          uploadButton.style.background = "#ff321a";
          uploadButton.disabled = true;
          console.error("Upload error:", error);
        });
      };
    };

    reader.readAsDataURL(file);
  });
}






  // var  imageModal2 = document.querySelector("#image-github-modal");
  // var imageDrag2 = document.querySelector("#image-github-drag");
  // makeElementDraggable(imageModal2, imageDrag2);

  document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    var fileInput2 = document.getElementById("image-github-input");
    var files2 = fileInput2.files;
    
    if (files2.length === 0) {
      console.log("No file selected.");
      const button = document.getElementById("image-github-upload-button");
      button.textContent = "Upload your image";
      button.style.background = "#ffca1f";
      button.style.color = "black";
      button.disabled = true;
      button.style.cursor = "not-allowed";
    } else {
      // Handle the case when a file is selected
      console.log("File selected:");
    }
  });

  

  function checkFileInput() {
    var fileInput2 = document.getElementById("image-github-input");
    var files2 = fileInput2.files;
    var widthInput = document.getElementById('widthInput');
    var heightInput = document.getElementById('heightInput');
    var sizeWidthInput = document.getElementById('sizeWidthInput');
    var sizeHeightInput = document.getElementById('sizeHeightInput');
  
    if (files2.length === 0) {
      console.log("No file selected.");
    } else {
      // Handle the case when a file is selected
      console.log("File selected:");
      const button = document.getElementById("image-github-upload-button");
      button.textContent = "Upload your image";
      button.style.background = "#ffca1f";
      button.style.color = "black";
      button.disabled = false;
      button.style.cursor = "pointer";
  
      // Get the width and height of the selected image
      var file = files2[0];
      var img = new Image();
      img.src = window.URL.createObjectURL(file);
      img.onload = function () {
        var imgWidth = img.width;
        var imgHeight = img.height;
        
  
        // Update the width and height input fields
        widthInput.value = imgWidth;
        heightInput.value = imgHeight;
        sizeWidthInput.value = imgWidth;
        sizeHeightInput.value = imgHeight;



        initialize();
  
        // Perform further processing with the file if needed
      };
    }
  }
  

  
  // Attach the function to the "input" event of the file input
  const fileInput2 = document.getElementById("image-github-input");
  fileInput2.addEventListener("input", checkFileInput);
  


  function githubImageStatus201(){   
    
    var imageUploadButton =  document.getElementById("image-github-upload-button");  
    imageUploadButton.textContent = "Image uploaded suscesfully!";
    imageUploadButton.style.background = "green";
    imageUploadButton.style.color = "white";
    imageUploadButton.disabled = true;
    imageUploadButton.style.cursor = "not-allowed";
  }

  function githubImageStatus422(){   
    var imageUploadButton =  document.getElementById("image-github-upload-button");  
    imageUploadButton.textContent = "Image already exist!";
    imageUploadButton.style.background = "red";
    imageUploadButton.style.color = "white";
    imageUploadButton.disabled = true;
    imageUploadButton.style.cursor = "not-allowed";
}

function githubImageStatusError(){   
  var imageUploadButton =  document.getElementById("image-github-upload-button");  
  imageUploadButton.textContent = "Error uploading your image";
  imageUploadButton.style.background = "red";
  imageUploadButton.style.color = "white";
  imageUploadButton.disabled = true;
  imageUploadButton.style.cursor = "not-allowed";
}

function githubImageCloseModal(){
  const closeModal = document.getElementById('image-github-modal');
  closeModal.style.display="none";
}