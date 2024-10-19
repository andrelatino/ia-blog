
var unsplashValue = localStorage.getItem("unsplashID");
if (unsplashValue) {
  var clientId = unsplashValue;
}
var page = '1'
var perPage = '20';
var imageType = 'landscape';
// var imageWidth = '1280';
var count = 1; 
var searchTerm = "food";

 // landscape  portrait 

/**Other APIS to try
8ba7daec662eb3e3f18f31a571b61faece5beb250fe546925e79e21ca827672f
22b7b54287910389edfae878f576488bbc5b540a46daa0d2833ba858ce03b143
*/

// Get the reference to the input element
const inputElement = document.getElementById("image-settings-type");

// Create a select element
const selectElement = document.createElement("select");
selectElement.id = "image-settings-type";

// Define the options
const options = ["landscape", "portrait", "squarish"];
const defaultOption = "landscape";

// Create options and append them to the select element
options.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option;
  optionElement.text = option;
  
  if (option === defaultOption) {
    optionElement.selected = true;
  }
  
  selectElement.appendChild(optionElement);
});

// Replace the input element with the select element
inputElement.parentNode.replaceChild(selectElement, inputElement);


//get value
var imageWidthInput = document.getElementById('image-settings-width');
var imageWidthValue = localStorage.getItem('imageWidth') || imageWidthInput.value;
// Set the initial value
imageWidthInput.value = imageWidthValue;
// Event listener for input changes
imageWidthInput.addEventListener('input', function() {
  imageWidthValue = imageWidthInput.value;
  localStorage.setItem('imageWidth', imageWidthValue);
});

//get value
var imageHeightInput = document.getElementById('image-settings-height');
var imageHeightValue = localStorage.getItem('imageHeight') || imageHeightInput.value;
// Set the initial value
imageHeightInput.value = imageHeightValue;
// Event listener for input changes
imageHeightInput.addEventListener('input', function() {
  imageHeightValue = imageHeightInput.value;
  localStorage.setItem('imageHeight', imageHeightValue);
});


var imageTypeInput = document.getElementById('image-settings-type');
var imageTypeValue = localStorage.getItem('imageType') || imageTypeInput.value;
// Set the initial value
imageTypeInput.value = imageTypeValue;
// Event listener for input changes
imageTypeInput.addEventListener('input', function() {
  imageTypeValue = imageTypeInput.value;
  localStorage.setItem('imageType', imageTypeValue);
});


// var imageOrderInput = document.getElementById('image-settings-order');
// var imageOrderValue = localStorage.getItem('imageOrder') || imageOrderInput.value;
// // Set the initial value
// imageOrderInput.value = imageOrderValue;
// // Event listener for input changes
// imageOrderInput.addEventListener('input', function() {
//   imageOrderValue = imageOrderInput.value;
//   localStorage.setItem('imageOrder', imageOrderValue);
// });


function loadUnsplashImages(){
    removeExistingItems();
    console.log('loadUnsplashImages()');
    
    clientId = unsplashApi;
    page = '1'
    perPage = '20';
    
    const imageThumbnail = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}&orientation=${imageType}&page=${page}&client_id=${clientId}`;
    // alert (imageThumbnail);
    fetch(imageThumbnail)
    .then(response => response.json())
    .then(data => {
        const totalImages = data.total;
        document.getElementById('image-sidebar-total').textContent = totalImages+ "";
        document.getElementById("image-sidebar-next-button").style.opacity = 1; 
        const imageGridList = document.getElementById('image-sidebar-grid');
        for (const api of data.results) { 
          
          const DivItems = document.createElement('div');
          const imageThumbnail = api.urls.raw + "&w=170&fit=crop";
          const imageBig = api.urls.raw + `&w=${imageWidthValue}&h=${imageHeightValue}&fit=crop`;
          DivItems.className = 'image-sidebar-items';
          DivItems.innerHTML = `              
                  
            <img src="${imageThumbnail}" loading="lazy" width="170px" onclick="imageClickUnsplash('${imageBig}')">          
            <div class="image-sidebar-alt">  
              <p class="image-sidebar-url">${api.alt_description}</p>
            </div>
          `;
          imageGridList.appendChild(DivItems);
        }
    });
}
loadUnsplashImages();

  function loadImages(){
    

    searchTerm = searchQuery;
    // clientId = "8ba7daec662eb3e3f18f31a571b61faece5beb250fe546925e79e21ca827672f";
    const imageThumbnail = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}&orientation=${imageType}&page=${page}&client_id=${clientId}`;
    
    fetch(imageThumbnail)
    .then(response => response.json())
    .then(data => {
        const totalImages = data.total;
        document.getElementById('image-sidebar-total').textContent = totalImages+ "";
        document.getElementById("image-sidebar-next-button").style.opacity = 1; 
        const imageGridList = document.getElementById('image-sidebar-grid');
        for (const api of data.results) {
          
          const DivItems = document.createElement('div');
          const imageThumbnail = api.urls.raw + "&w=170&fit=crop";
          const imageBig = api.urls.raw + `&w=${imageWidthValue}&h=${imageHeightValue}&fit=crop`;
          DivItems.className = 'image-sidebar-items';
          DivItems.innerHTML = `              
                  
          <img src="${imageThumbnail}" loading="lazy" width="170px" onclick="imageClickUnsplash('${imageBig}')">          
          <div class="image-sidebar-alt">  
            <p class="image-sidebar-url">${api.alt_description}</p>
          </div>
          `;
          imageGridList.appendChild(DivItems);
        }
    });
        
  }


  function imageClickUnsplash(imageURL){
    console.log('imageClickUnsplash(imageURL)');
    console.log("Clicked image URL:", imageURL);
    image_FG_Update(imageURL);
  }

//   function checkImageTypeAll(){
//     console.log('checkImageTypeAll()');
    
//         const imageTypeIs = localStorage.getItem('imageTypeIs');
//         if (imageTypeIs === "image-fg"){
//           clickAllSingleImage();
//         } else if (imageTypeIs === "img-bg"){
//           clickAllImage();
//         }
      
//   }

//   function checkImageTypeXs(){
//     const imgSingleType = document.getElementById('image-single-type').textContent;
//     if (imgSingleType === "img-grid"){
//       clickXsSingleImage();
//     } else {
//       clickXsImage();
//     }
// }

    
function loadNextPage() { 

    removeExistingItems();
    count += 1;
    const page = count;

    const imageThumbnail = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}&orientation=${imageTypeValue}&page=${page}&client_id=${clientId}`;    
    fetch(imageThumbnail)
    .then(response => response.json())
    .then(data => {
        const totalImages = data.total;
        document.getElementById('image-sidebar-total').textContent = totalImages+ "";
        
        const imageGridList = document.getElementById('image-sidebar-grid');
        for (const api of data.results) {
          
          const DivItems = document.createElement('div');
          const imageThumbnail = api.urls.raw + "&w=170&fit=crop";
          const imageBig = api.urls.raw + `&w=${imageWidthValue}&h=${imageHeightValue}&fit=crop`;
          DivItems.className = 'image-sidebar-items';
          DivItems.innerHTML = `              
                  
          <img src="${imageThumbnail}" loading="lazy" width="170px" onclick="imageClickUnsplash('${imageBig}')">          
          <div class="image-sidebar-alt">  
            <p class="image-sidebar-url">${api.alt_description}</p>
          </div>
          `;
          imageGridList.appendChild(DivItems);
        }
    });

  }

  function searchImages() {

    // Get the input and button elements by their ids
    searchInput = document.getElementById("image-sidebar-search-input");
    searchButton = document.getElementById("image-sidebar-search-button");
    searchQuery = searchInput.value;
    console.log(searchQuery);
    removeExistingItems();
    loadImages();
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 && event.target.id === "image-sidebar-search-input") {
      searchImages();
    }
  });


  function removeExistingItems() {
    var items = document.querySelectorAll(".image-sidebar-items");
    for (var i = 0; i < items.length; i++) {
        items[i].remove();
    }
}

    
    
    

      function cleanView(){
        const imageModal = document.getElementById('image-modal');
        const toolbarModal = document.getElementById('toolbarModal');
        const overlay = document.getElementById('overlay');
        const toolbarOpen = document.querySelector('.toolbar-open');

        imageModal.style.display='none';
        toolbarModal.style.display='none';
        overlay.style.display='none';
        toolbarOpen.style.visibility='hidden';

      }

      function cleanShow(){
        const imageModal = document.getElementById('image-modal');
        const toolbarModal = document.getElementById('toolbarModal');
        const overlay = document.getElementById('overlay');
        const toolbarOpen = document.querySelector('.toolbar-open');

        imageModal.style.display='grid';
        toolbarModal.style.display='grid';
        overlay.style.display='grid';
        toolbarOpen.style.visibility='visible';

      }