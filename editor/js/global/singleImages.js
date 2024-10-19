// function getImageIdOnClick() {
//   const grid = document.getElementById('grid-body');
//   // Asegurar que no se dupliquen los oyentes de eventos
//   grid.removeEventListener('click', handleImageClick);
//   grid.addEventListener('click', handleImageClick);
// }

// function handleImageClick(event) {
//   if (event.target.tagName === 'IMG' && event.target.getAttribute('data-type') === 'image-fg' && event.target.id) {
//     sectionSingleImage(event.target.id);
//     const imgSingleID = document.getElementById('image-single-id');
//     imgSingleID.textContent = event.target.id;
//     const imgSingleType = document.getElementById('image-single-type');
//     imgSingleType.textContent = 'image-fg';
//     console.log(event.target.id);
//   }
// }

// // Asignar el manejador de eventos una vez que la ventana esté completamente cargada
// window.onload = function() {
//   getImageIdOnClick();
// };

// // También podrías considerar llamar getImageIdOnClick directamente si no depende críticamente de que todas las imágenes estén cargadas.
// getImageIdOnClick();


   
// function sectionSingleImage(image_ID) {
//     show_Image_Modal();

//     localStorage.setItem('imageIdIs', image_ID);
//     localStorage.setItem('imageTypeIs', 'image-fg');
//     // alert(pictureID);
//     loadAllSingleImage();
//     imageAllSingleButton();
//     // loadUnsplashImages();
//     // loadGithubImages();

// }
  
// function show_Image_Modal() {
//     var divModal = document.getElementById("image-modal");
//     divModal.style.display = "grid";
// }
// function hideSingleImageModal() {
//     var divModal = document.getElementById("image-modal");
//     divModal.style.display = "none";
// }

// function loadAllSingleImage() {
//   const imageIdIs = localStorage.getItem('imageIdIs');
//   const imageElement = document.getElementById(imageIdIs);
//   const singleImageSrc = imageElement.getAttribute('src');
//   const showSingleImage = document.getElementById('image-all-thumbnail');
//   showSingleImage.src = singleImageSrc;
//   // showSingleImage.removeAttribute('srcset');
// }

// function imageAllSingleButton(){
    
//   localStorage.setItem('imageSize','All');
//   // loadAllImage();
  
//   var imageDivAll = document.getElementById("image-all"); imageDivAll.style.visibility = "visible";
//   var imageDivM = document.getElementById("image-m"); imageDivM.style.visibility = "hidden";
//   var imageDivXs = document.getElementById("image-xs"); imageDivXs.style.visibility = "hidden";
 
  
//   var imageButtonAll = document.getElementById("image-btn-all"); 
//       imageButtonAll.style.background = "#007dec";
//   var imageButtonAllImg = document.querySelector("#image-btn-all img");
//       imageButtonAllImg.style.filter = "invert(1)";

//   var imageButtonM = document.getElementById("image-btn-m"); 
//       imageButtonM.style.background = "white";
//   var imageButtonMImg = document.querySelector("#image-btn-m img");
//       imageButtonMImg.style.filter = "none";
//   var imageButtonMClear = document.getElementById("image-btn-m-clear"); 
//       imageButtonMClear .style.display = "none";
 
//   var imageButtonXs = document.getElementById("image-btn-xs"); 
//       imageButtonXs.style.background = "white"; 
//   var imageButtonXsImg = document.querySelector("#image-btn-xs img");
//       imageButtonXsImg.style.filter = "none";
//   var imageButtonXsClear = document.getElementById("image-btn-xs-clear"); 
//       imageButtonXsClear .style.display = "none";

// }