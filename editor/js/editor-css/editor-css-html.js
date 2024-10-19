// function addCssEditorHtml() {
//     var editorDiv = document.getElementById("editor-css");
//     if (editorDiv) {
//       var content = `
//       <div id="editor-css-content">     
//             <div id="editor-css-buttons" style="display:none;">
//                 <button id="editor-drag"><img src="./assets/svg/icons/drag.svg"></button>
//                 <button id="all-button" onclick="loadALLCss()">PC</button>
//                 <button id="m-button" onclick="loadMCss()">Tablet</button>
//                 <button id="xs-button" onclick="loadXSCss()">Mobile</button>
//                 <button id="editor-css-close" onclick="cssEditorClose()" ><img src="./assets/svg/icons/close.svg"></button>
                
//             </div>
//             <div id="editor-css-inputs">
                
//                 <p class ="inputCssRules" id="inputCssRules">a#YPsfcED</span></p> 
//                 <textarea id="all-textarea" autocomplete="off">All</textarea>
//                 <textarea id="m-textarea" autocomplete="off">M</textarea>
//                 <textarea id="xs-textarea" autocomplete="off">Xs</textarea>
                
//             </div>	
        
//             <div class="editor-css-ids">
//                 <p class="inputTitleColor" style="display:block;"><span>Section : </span> <span id="sectionID-text"></span> </p>
//                 <p class="inputTitleColor" style="display:block;"><span>Style : </span> <span id="styleID-text"></span> </p>
//                 <p class="inputTitleColor" id="elementsTagId"><span id="elementTag">Element : </span><span id="elementID-text"></span></p> 
//                 <p class="inputTitleColor" style="display:block;"><span>Size : </span> <span id="buttonID-text"></span> </p>
                
                       
//             </div>

//             <button onclick="cssEditorClose()" class="editor-close">
//                 <img class="editor-close-img" src="./assets/svg/icons/close.svg">
//             </button>
//             <button id="editor-btn-all" onclick="loadALLCss();" style="background: rgb(0, 125, 236);">
//               <img src="../global/file/pc.svg" style="filter: invert(1);">
//             </button>
//             <button id="editor-btn-m" onclick="loadMCss();" style="background: white;">
//               <img src="../global/file/tablet.svg" style="filter: none;">
//             </button>
//             <button id="editor-btn-xs" onclick=" loadXSCss();" style="background: white;">
//               <img src="../global/file/mobile.svg" style="filter: none;">
//             </button>
            
//             <select id="editor-css-select"></select>

//       </div>
//       `;
//       editorDiv.innerHTML = content;
      
//     } else {
//       console.error("Editor element not found.");
//     }
//   }
//   addCssEditorHtml();
  
//   // var editor = document.querySelector("#editor");
//   // var editorDrag = document.querySelector("#editor-drag");
//   // makeElementDraggable(editor, editorDrag);




