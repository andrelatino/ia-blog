//Responsive Queries

// var imageXsQuery =  '(max-width:640px)';
// var imageSQuery =  '(min-width:641px) and (max-width:768px)';
// var imageMQuery =  '(min-width:641px) and (max-width:1024px)';
// var imageLQuery =  '(min-width:1025px) and (max-width:1280px)';
// var imageXlQuery =  '(min-width:1025px)';

var imageEmpty = '';
var imagePlaceholder = 'Image URL (optional)';

function extractImgSrc(pictureID) {
    const pictureElement = document.getElementById(pictureID);
    if (pictureElement) {
      const imgElement = pictureElement.querySelector('img[data-type="img-bg"]');
      if (imgElement) {
        const src = imgElement.getAttribute('src');
        if (src && src.trim() !== '') {
          return src;
        }
      }
    }
    return '';
  }
  

  function extractImgSrcset(pictureID, mediaQuery) {
    const pictureElement = document.getElementById(pictureID);
    if (pictureElement) {
      const sourceElement = pictureElement.querySelector(`source[media="${mediaQuery}"]`);
      if (sourceElement) {
        const srcset = sourceElement.getAttribute('srcset');
        if (srcset && srcset.trim() !== '') {
          return srcset;
        }
      }
    }
    return '';
  }
 

  function loadAllImage() {
    const pictureID = localStorage.getItem('pictureID');
    const srcsetForMedia = extractImgSrc(pictureID);
    const inputID = document.getElementById('image-all-input');
    const thumbBG = document.getElementById('image-all-thumbnail');
    if (srcsetForMedia) {
        // The variable is not empty (has a value)
        inputID.value = srcsetForMedia;
        thumbBG.srcset = srcsetForMedia;

      } else {
        thumbBG.srcset = imageEmpty;
        inputID.setAttribute('placeholder', 'Image URL (mandatory)');
      }
        console.log('Image ALL:', srcsetForMedia);
  }
 

  function loadXsImage() {
    const pictureID = localStorage.getItem('pictureID');
    // const pictureID = 'KJvbTCG'; // Replace with the actual picture ID
    const mediaQuery = '(max-width:640px)';
    const srcsetForMedia = extractImgSrcset(pictureID, mediaQuery);
    const inputID = document.getElementById('image-xs-input');
    const thumbBG = document.getElementById('image-xs-thumbnail');
    if (srcsetForMedia) {
        // The variable is not empty (has a value)
        inputID.value = srcsetForMedia;
        thumbBG.srcset = srcsetForMedia;
        

      } else {
        thumbBG.srcset = imageEmpty;
        inputID.setAttribute('placeholder', imagePlaceholder);
      }
    console.log('Image XS:', srcsetForMedia);
  }

  function loadMImage() {
    const pictureID = localStorage.getItem('pictureID');
    // const pictureID = 'KJvbTCG'; // Replace with the actual picture ID
    const mediaQuery = '(min-width:641px) and (max-width:1024px)';
    const srcsetForMedia = extractImgSrcset(pictureID, mediaQuery);
    const inputID = document.getElementById('image-m-input');
    const thumbBG = document.getElementById('image-m-thumbnail');
    if (srcsetForMedia) {
        // The variable is not empty (has a value)
        inputID.value = srcsetForMedia;
        thumbBG.srcset = srcsetForMedia;
        

      } else {
        thumbBG.srcset = imageEmpty;
        inputID.setAttribute('placeholder', imagePlaceholder);
      }
    console.log('Image M:', srcsetForMedia);
  }