


function toolsHtml(){
    var modalHtml = `
      <div id="toolbarModal" class="flip-card mobile-box">
        <div class="flip-card-inner">
          <div class="flip-card-front">
              
              <div id="toolbar-header"> 
                <button id="toolbar-drag">
                  <img src="./assets/svg/icons/drag.svg">
                </button>
                <div class='toolbarTitles'>
                  <span>Section ID : </span><span id="toolbarSectionID"></span>
                </div>
                <button onClick="toolsCloseModal()" class="toolbar-close">
                  <img src="./assets/svg/icons/close.svg">
                </button>
              </div>

              <div id="toolbar-buttons"> 

              <button class="export-section" onclick="deleteSection()">
                <img src="./assets/svg/icons/delete.svg">
                <span class="tooltiptext">Delete</span>
              </button>

                <button class="export-section" onclick="exportSection()">
                  <img src="./assets/svg/icons/export.svg">
                  <span class="tooltiptext">Export</span>
                </button>


                <button class="image-section" onclick="flipCardOnClick()">
                  <img src="./assets/svg/icons/image.svg">
                  <span class="tooltiptext">Bg</span>
                </button>

                <button class="image-section" onclick="showPicker()">
                  <img src="./assets/svg/icons/image.svg">
                  <span class="tooltiptext">Overlay</span>
                </button>

                <button class="move-down-section" onclick="moveDownSection()">
                  <img src="./assets/svg/icons/down.svg">
                  <span class="tooltiptext">Down</span>
                </button>

                <button class="move-up-section" onclick="moveUpSection()">
                  <img src="./assets/svg/icons/up.svg">
                  <span class="tooltiptext">Up</span>
                </button>

                <button onclick="html_open();">
                  <img src="./assets/svg/icons/html.svg">
                  <span class="tooltiptext">Html</span>
                </button>

                <button onclick="js_open();">
                  <img src="./assets/svg/icons/html.svg">
                  <span class="tooltiptext">JS</span>
                </button>

                <button onclick="css_open('laptop','section');">
                  <img src="./assets/svg/icons/html.svg">
                  <span class="tooltiptext">CSS</span>
                </button>

                

                <button onclick="section_open();">
                  <img src="./assets/svg/icons/html.svg">
                  <span class="tooltiptext">Section</span>
                </button>

                <button onclick="ia_openModal();">
                  <img src="./assets/svg/icons/magic.png">
                  <span class="tooltiptext">Ask IA</span>
                </button>

                <!--

                <button onclick="props_open();">
                  <img src="./assets/svg/icons/html.svg">
                  <span class="tooltiptext">Props</span>
                </button>

                
                -->



              </div>
        </div>
      
        <div class="flip-card-back">
          <div id="toolbar-header"> 
                <button id="toolbar-drag" onclick="flipCardOnClick()">
                  <img src="./assets/svg/icons/rotate.svg">
                </button>
                <div class='toolbarTitles'>Background</div>
                <button onClick="toolsCloseModal(); flipCardOnClick()" class="toolbar-close">
                  <img src="./assets/svg/icons/close.svg">
                </button>
          </div>
          <div class="flip-card-back-buttons"> 

              <div class="radio-group">
              <label>
                  <img src="./assets/svg/icons/bg-color.svg">
                  <span class="tooltiptext">Color</span>
                  <input type="radio" id="colorRadio" name="media" value="Color" onclick="radioClicked('Color')">
                  <p id="color-id"></p>
                  <p id="color-selected-id"></p>
                  <p id="color-selected-data"></p>
                  <p id="color-current-bg"></p>
              </label>
              <label>
                  <img src="./assets/svg/icons/bg-image.svg">
                  <span class="tooltiptext">Image</span>
                  <input type="radio" id="imageRadio" name="media" value="Image" onclick="radioClicked('Image')">
                  <p id="image-id">ID</p>
              </label>
              <label>
                  <img src="./assets/svg/icons/bg-video.svg">
                  <span class="tooltiptext">Video</span>
                  <input type="radio" id="videoRadio" name="media" value="Video" onclick="radioClicked('Video')">
                  <p id="video-id">ID</p>
                  <p id="video-src">SRC</p>
              </label>
              <button id='edit-bg'> Edit Background </button>
          </div>
          

        </div>
        </div>
      </div>
    </div>
        
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}
toolsHtml();

// Define a function to toggle the class on click
function flipCardOnClick() {

  colorID();
  videoID();
  imageID();
 
   
  const flipCardInner = document.querySelector('.flip-card-inner');
    // Toggle the class to rotate or reset
    if (flipCardInner.style.transform === 'rotateY(180deg)') {
      flipCardInner.style.transform = 'rotateY(0deg)';
    } else {
      flipCardInner.style.transform = 'rotateY(180deg)';
    }
  }

var selectedMedia;
const customTextButton = document.getElementById('edit-bg');
customTextButton.textContent = 'Select Background';

function radioClicked(value) {
    selectedMedia = value;
    if (selectedMedia === 'Color'){
      selectBgColor();
      const customTextButton = document.getElementById('edit-bg');
      customTextButton.textContent = 'Edit Color';
    } else if (selectedMedia === 'Image'){
      selectBgImage();
      const customTextButton = document.getElementById('edit-bg');
      customTextButton.textContent = 'Edit Image';
    } else if (selectedMedia === 'Video'){
      selectBgVideo();
      const customTextButton = document.getElementById('edit-bg');
      customTextButton.textContent = 'Edit Video';
    } else {
      const customTextButton = document.getElementById('edit-bg');
      customTextButton.textContent = 'Select Background';
    }
    console.log("Selected Option: " + value);
}

function editBackground() {
    switch (selectedMedia) {
        case 'Color':
            editBgColor();
            break;
        case 'Image':
            editBgImage();
            break;
        case 'Video':
            editBgVideo();
            break;
        default:
            console.log("No media selected");
    }
}

function selectBgColor() {
  //COLOR 
  const colorID = document.getElementById('color-id').textContent;
  const colorSelected = document.getElementById(colorID);
  // colorSelected.style.display = 'grid';
  colorSelected.className = 'div-visible';
  //IMAGE
  const imageID = document.getElementById('image-id').textContent;
  const imageSelected = document.getElementById(imageID);
  // imageSelected.style.display = 'none';
  imageSelected.className = 'div-hidden';
  //VIDEO
  const videoID = document.getElementById('video-id').textContent;
  const videoSelected = document.getElementById(videoID);
  // videoSelected.style.display = 'none';
  videoSelected.className = 'div-hidden';
}
function editBgColor() {

    const getColorID = document.getElementById('color-id').textContent;
    picker_openModal(getColorID);
    
}

function selectBgImage() {
  //COLOR  
  const colorID = document.getElementById('color-id').textContent;
  const colorSelected = document.getElementById(colorID);
  // colorSelected.style.display = 'none';
  colorSelected.className = 'div-hidden';
  //IMAGE
  const imageID = document.getElementById('image-id').textContent;
  const imageSelected = document.getElementById(imageID);
  // imageSelected.style.display = 'grid';
  imageSelected.className = 'div-visible';
  //VIDEO
  const videoID = document.getElementById('video-id').textContent;
  const videoSelected = document.getElementById(videoID);
  // videoSelected.style.display = 'none';
  videoSelected.className = 'div-hidden';
}
function editBgImage() {
  // Obtén el ID de la sección desde el elemento con ID 'toolbarSectionID'
  const sectionID = document.getElementById('toolbarSectionID').textContent.trim();
  console.log('sectionID: ' + sectionID);
  
  // Encuentra la sección correspondiente en el documento
  const section = document.getElementById(sectionID);

  // Verifica que la sección exista
  if (section) {
    // Encuentra la imagen dentro de la sección que tiene el atributo data-type="image-bg"
    const img = section.querySelector('img[data-type="image-bg"]');

    // Verifica que la imagen exista
    if (img) {
      const getImageID = img.id;       // Obtén el ID de la imagen
      const getImageURL = img.src;     // Obtén la URL de la imagen

      // Llama a la función image_BG_Click con los valores obtenidos
      image_BG_Click(getImageID, 'image-bg', getImageURL);
    } else {
      console.log('No se encontró ninguna imagen con data-type="image-bg" en la sección.');
    }
  } else {
    console.log('No se encontró ninguna sección con el ID: ' + sectionID);
  }
}


function selectBgVideo() {
  //COLOR  
  const colorID = document.getElementById('color-id').textContent;
  const colorSelected = document.getElementById(colorID);
  // colorSelected.style.display = 'none';
  colorSelected.className = 'div-hidden';
  //IMAGE
  const imageID = document.getElementById('image-id').textContent;
  const imageSelected = document.getElementById(imageID);
  // imageSelected.style.display = 'none';
  imageSelected.className = 'div-hidden';
  //VIDEO
  const videoID = document.getElementById('video-id').textContent;
  const videoSelected = document.getElementById(videoID);
  // videoSelected.style.display = 'grid';
  videoSelected.className = 'div-visible';
}

// function editBgVideo() {
//     //VIDEO
//     videoModal();
//     getVideoUrl();
//     loadDefaultVideo();
//     loadGithubVideos();
// }

function editBgVideo() {

  // Obtén el ID de la sección desde el elemento con ID 'toolbarSectionID'
  const sectionID = document.getElementById('toolbarSectionID').textContent.trim();
  console.log('sectionID: ' + sectionID);
  
  // Encuentra la sección correspondiente en el documento
  const section = document.getElementById(sectionID);

  // Verifica que la sección exista
  if (section) {
    // Encuentra la imagen dentro de la sección que tiene el atributo data-type="image-bg"
    const video = section.querySelector('video[data-type="video-bg"]');

    // Verifica que la imagen exista
    if (video) {
      const getVideoID = video.id;       // Obtén el ID de la imagen
      const getVideoURL = video.src;     // Obtén la URL de la imagen
      console.log('getVideoID :'+getVideoID);
      console.log('getVideoURL :'+getVideoURL);

      // Llama a la función image_BG_Click con los valores obtenidos
      video_BG_Click(getVideoID, 'video-bg', getVideoURL);

    } else {
      console.log('No se encontró ninguna video con data-type="video-bg" en la sección.');
    }
  } else {
    console.log('No se encontró ninguna sección con el ID: ' + sectionID);
  }
  
}

function colorID() {
  const sectionId = document.getElementById('toolbarSectionID')?.textContent;
  const colorID = document.querySelector(`#${sectionId} grid-bg-color[data-type="grid-bg-color"]`)?.id || 'No ID found';
  const colorIDText = document.getElementById('color-id');
  colorIDText.textContent = colorID;

  // const colorSelectedDiv = document.getElementById(colorID);
  // const colorSelectedID = colorSelectedDiv.querySelector(".div-visible");
  // const colorSelectedTxt = document.getElementById('color-selected-id');
  // colorSelectedTxt.textContent = colorSelectedID.id;

  
  // const colorDataTypeID = document.getElementById(colorSelectedID.id);
  // const colorDataType = colorDataTypeID.getAttribute("data-type");
  // const colorDataTypeTxt = document.getElementById('color-selected-data');
  // colorDataTypeTxt.textContent = colorDataType;

  // const colorBgID = document.getElementById(colorSelectedID.id);
  // const colorCurrentRgb = window.getComputedStyle(colorBgID).getPropertyValue("background-color");
  // const colorCurrentTxt = document.getElementById('color-current-bg');
  // colorCurrentTxt.textContent = colorCurrentRgb;
}

function imageID() {
  const sectionId = document.getElementById('toolbarSectionID')?.textContent;
  const imageID = document.querySelector(`#${sectionId} grid-bg-image[data-type="grid-bg-image"]`)?.id || 'No ID found';
  const imageMessage = document.getElementById('image-id');
  imageMessage.textContent = imageID;
}

function videoID() {

  const sectionId = document.getElementById('toolbarSectionID')?.textContent;
  const videoID = document.querySelector(`#${sectionId} grid-bg-video[data-type="grid-bg-video"]`)?.id || 'No ID found';
  const videoMessage = document.getElementById('video-id');
  videoMessage.textContent = videoID;

  const videoSrc = document.getElementById(sectionId).getElementsByTagName('video')[0]?.id;
  const videoSrcText =  document.getElementById('video-src');
  videoSrcText.textContent = videoSrc;
}


// Attach the editBackground function to the button's click event
document.getElementById('edit-bg').addEventListener('click', editBackground);

function disableContentEditable() {
  const grid = document.getElementById("grid");
  const editableElements = grid.querySelectorAll('[contenteditable="true"]');

  editableElements.forEach((element) => {
    element.setAttribute("contenteditable", "false");
  });
}