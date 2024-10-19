 
function colorHtml() {
    // alert(pictureID);
    var editorDiv = document.getElementById("color-modal");
  
    if (editorDiv) {
      var content = `
      
      <div id="color-modal-box">
            
            <div id="solid-color-thumbnail" data-type="grid-solid-color">
                <div id = "solid-color-picker">
                    <div id="solid-coloris" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="solid-coloris-btn"></button>
                        <input id="solid-coloris-input" type="text" data-coloris class="coloris solid-coloris" readonly>
                    </div> 
                </div>
            </div>

            <div id="radial-color-thumbnail" data-type="grid-radial-color">
                <div id = "radial-color-picker1">
                    <div id="radial-coloris1" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="radial-coloris-btn1"></button>
                        <input id="radial-coloris-input1" type="text" data-coloris class="coloris radial-coloris1" readonly>
                    </div> 
                </div>

                <div id = "radial-color-picker2">
                    <div id="radial-coloris2" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="radial-coloris-btn2"></button>
                        <input id="radial-coloris-input2" type="text" data-coloris class="coloris radial-coloris2" readonly>
                    </div> 
                </div>
            </div>

            <div id="linear-color-thumbnail" data-type="grid-linear-color">
                <div id = "linear-color-picker1">
                    <div id="linear-coloris1" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="linear-coloris-btn1"></button>
                        <input id="linear-coloris-input1" type="text" data-coloris class="coloris linear-coloris1" readonly>
                    </div> 
                </div>

                <div id = "linear-color-picker2">
                    <div id="linear-coloris2" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="linear-coloris-btn2"></button>
                        <input id="linear-coloris-input2" type="text" data-coloris class="coloris linear-coloris2" readonly>
                    </div> 
                </div>

                <input id="linear-range" type="range" min="0" max="360" value="0">
                <div id="marker">0</div>
            </div>

            

            <div id = "color-modal-buttons">
              <button id="solid-color-btn" onclick="solidColorBgIsSelected(); solidColorThumbIsSelected(); solidColorButton()">Solid</button>
              <button id="radial-color-btn" onclick="radialColorBgIsSelected(); radialColorThumbIsSelected(); radialColorButton()">Radial</button>	
              <button id="linear-color-btn" onclick="linearColorBgIsSelected(); linearColorThumbIsSelected(); linearColorButton()">Linear</button> 
              <p id="solid-bg-id"></p>
              <p id="radial-bg-id"></p>
              <p id="linear-bg-id"></p>        	    	     	
            </div>
            <button onclick="hideColorModal(); closeSolidSidebar()" class="color-close"><img src="./assets/svg/icons/close.svg"></button>          
      </div>
      
      
      `;
      
      editorDiv.innerHTML = content;
      var imageModal = document.querySelector("#color-modal");
      imageModal.className = "mobile-box";

        // const clrColorPreview = document.getElementById("clr-color-preview");
        // clrColorPreview.addEventListener("click", function() {
        //     colorReadOnlyFalse();
        // });

        // const clrColorClose = document.getElementById("clr-close");
        // clrColorClose.addEventListener("click", function() {
        //     colorReadOnlyTrue();
        // });

        




    } else {
      console.error("Editor element not found.");
    }
  }

  colorHtml();

  function showColorModal() {
    var divModal = document.getElementById("color-modal");
    divModal.style.display = "grid";
  }
  function hideColorModal() {
    var divModal = document.getElementById("color-modal");
    divModal.style.display = "none";
  }