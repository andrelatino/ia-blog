 
function sectionImage() {

  console.log ('sectionImage()')

  showImageModal();
  loadUnsplashImages();
  loadGithubImages();
  

  const textID = document.getElementById('toolbarSectionID');
  const sectionID = textID.textContent.trim();
  const sectionElement = document.getElementById(sectionID);


  if (sectionElement) {
    const pictureElement = sectionElement.querySelector('picture');
    if (pictureElement) {
      const getPictureID = pictureElement.id;
      var pictureID = getPictureID;
    } else {
        console.log('Picture element not found within the section.');
    }
  } else {
      console.log('Section element with ID', sectionID, 'not found.');
  }

  var pictureElement2 = document.getElementById(pictureID);
  var imgElement = pictureElement2.querySelector('img');
  if (imgElement) {
    var getImageID = imgElement.getAttribute('id');
      console.log("Image ID:", getImageID);
  } else {
      console.log("Image tag not found.");
  }

  const imageID = getImageID;
  
  // alert(pictureID+' - '+imageID)
  localStorage.setItem('pictureID', pictureID);
  localStorage.setItem('imageID', imageID);
  // alert(pictureID);
  var editorDiv = document.getElementById("image-modal");

 
  if (editorDiv) {
    var content = `
    
    <div id="image-container">

          <div id="image-github-buttons">
          
            <button id="image-drag"><img src="./assets/svg/icons/drag.svg"></button>
            
          </div>
          
          
          <div id="image-responsive">
            <div id="image-all">          
                <img id="image-all-thumbnail" src="">           
                <input type="text" id="image-all-input"> 
                <button id="image-all-save" onclick="updateAllImage();">SAVE (ALL)</button>
            </div>
            
            <div id="image-m">
                <img id="image-m-thumbnail" src="./assets/svg/icons/upload-empty.svg" srcset="./assets/svg/icons/upload-empty.svg">
                <input type="text" id="image-m-input">
                <button id="image-m-save" onclick="updateMImage();">SAVE (M)</button>    
            </div>
            
            <div id="image-xs">
                <img id="image-xs-thumbnail" src="./assets/svg/icons/upload-empty.svg" srcset="./assets/svg/icons/upload-empty.svg"> 
                <input type="text" id="image-xs-input">
                <button id="image-xs-save" onclick="updateXsImage();">SAVE (XS)</button>    
            </div>
          </div>

          <div id = "image-libraries">
            <button id="imageWebSidebarButton" onclick="sidebarOpenClose(this)">
              <span class="tooltiptext-right">Web</span>	
            </button>
            <button id="imageGithubSidebarButton" onclick="sidebarOpenClose(this)">
              <span class="tooltiptext-right">Media</span>
            </button>
            
            
          </div>
          
          <button onclick="hideImageModal(); closeImageSidebar(); closeAllImageSidebars()" class="video-close">
                <img src="./assets/svg/icons/close.svg">
          </button>
          <button id="image-btn-all" onclick="imageAllButton(); checkClearButton();">
            <img src="../global/file/pc.svg">
          </button>
          <button id="image-btn-m" onclick="imageMButton(); checkClearButton();">
            <img src="../global/file/tablet.svg">
          </button>
          <button id="image-btn-xs" onclick=" imageXsButton(); checkClearButton();">
            <img src="../global/file/mobile.svg">
          </button>

          <button id="image-btn-m-clear" onclick=" imageClearM(); checkClearButton();">
            <img src="../global/file/delete.svg">
          </button>         
          <button id="image-btn-xs-clear" onclick=" imageClearXs();">
            <img src="../global/file/delete.svg">
          </button>

          <p id="image-single-id">${imageID}</p>
          <p id="image-single-type">image-bg</p>
          <p id="image-single-url">URL</p>
          <p id="is-BG">is BG</p>

      </div> 
 
    `;
    
    editorDiv.innerHTML = content;
    var imageModal = document.querySelector("#image-modal");
    imageModal.className = "mobile-box";
    var imageDrag = document.querySelector("#image-drag");
    makeElementDraggable(imageModal, imageDrag);

    
  } else {
    console.error("Editor element not found.");
  }
}

  function showImageModal() {
    var divModal = document.getElementById("image-modal");
    divModal.style.display = "grid";
  }
  function hideImageModal() {
    var divModal = document.getElementById("image-modal");
    divModal.style.display = "none";
  }