// function editorMenu() {
//   /** NAV BOTTOM */
// var overlay = document.createElement('div'); // Create an overlay
// overlay.className = 'overlay'; // Add a class for styling
// overlay.id = 'overlay'; // Add an id for styling
// overlay.style.display = 'none'; // Initially hide the overlay

// var gridWrapper = document.getElementById('grid-wrapper'); // Get the grid-wrapper element
// gridWrapper.appendChild(overlay); // Append the overlay to the grid-wrapper

//   var openBtn = document.createElement('button');
//   openBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
//   openBtn.className = 'nav-style open-editor-btn';
//   document.body.appendChild(openBtn);

//   var closeBtn = document.createElement('button');
//   closeBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
//   closeBtn.className = 'nav-style close-editor-btn';
//   document.body.appendChild(closeBtn);

//   var popup = document.createElement('div');
//   popup.innerHTML = `
//     <div id="popup" class="mobile-box">

//     <div class = "navigation-links">
//         <span id="nav_sitetitle"></span>
//         <span id="nav_servertitle"></span>
//     </div> 

//       <button id ="backToSites" class="navigation" onclick="backToSites()">
//           <img class="editor-icons" src="./assets/svg/icons/back.svg">
//           <span class="editor-items">Retour</span>
//       </button>

  
//       <button class="navigation" onclick="patternSidebarOpen()">
//           <img class="editor-icons" src="./assets/svg/icons/sections.svg">
//           <span class="editor-items">Section</span>
//       </button>
      
//       <button id="menu-page-save" class="navigation" onclick="pageSaveData()">
//           <img class="editor-icons" src="./assets/svg/icons/save.svg">
//           <span class="editor-items">Sauvegarder</span>
//       </button>

//       <button class="navigation" onclick="pagePublish()">
//           <img class="editor-icons" src="./assets/svg/icons/publish2.svg">
//           <span class="editor-items">Publier</span>
//       </button>

//       <button class="navigation" onclick="settingsOpenSidebar()">
//           <img class="editor-icons" src="./assets/svg/icons/page-settings.svg">
//       </button>

//     </div>
//   `;
//   popup.style.display = 'none';
//   document.body.appendChild(popup);

//   openBtn.addEventListener('click', function() {
//     popup.style.display = 'block';
//     // overlay.style.display = 'block'; // Show the overlay
//     openBtn.style.display = 'none';
//     closeBtn.style.display = 'grid';
//   });

//   closeBtn.addEventListener('click', function() {
//     popup.style.display = 'none';
//     // overlay.style.display = 'none'; // Hide the overlay
//     openBtn.style.display = 'grid';
//     closeBtn.style.display = 'none';
//   });

//   const getSiteName = localStorage.getItem('githubRepoName');
//   const navSiteName = document.getElementById('nav_sitetitle');
//   navSiteName.textContent = getSiteName;

//   const getServerName = localStorage.getItem('githubUser');
//   const navServerName = document.getElementById('nav_servertitle');
//   navServerName.textContent = getServerName;

// }

// Call the editorMenu function to generate the sidebar menu

// function editorMenu() {
//   /** NAV BOTTOM */
// var overlay = document.createElement('div'); // Create an overlay
// overlay.className = 'overlay'; // Add a class for styling
// overlay.id = 'overlay'; // Add an id for styling
// overlay.style.display = 'none'; // Initially hide the overlay

// var gridWrapper = document.getElementById('grid-wrapper'); // Get the grid-wrapper element
// gridWrapper.appendChild(overlay); // Append the overlay to the grid-wrapper

//   var openBtn = document.createElement('button');
//   openBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
//   openBtn.className = 'nav-style open-editor-btn';
//   document.body.appendChild(openBtn);

//   var closeBtn = document.createElement('button');
//   closeBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
//   closeBtn.className = 'nav-style close-editor-btn';
//   document.body.appendChild(closeBtn);

//   var popup = document.createElement('div');
//   popup.innerHTML = `
//     <div id="popup" class="mobile-box">

      

//       <div id="ai-chat">
//         <div class="ai-title">
//             <select id="ai-select">
//                 <option value="@blog">Blog</option>
//             </select>
//             <button id="menu-page-save" class="navigation" onclick="pageSaveData()">
//                 <img class="editor-icons" src="./assets/svg/icons/save.svg">
//             </button>
//             <button class="navigation" onclick="pagePublish()">
//                 <img class="editor-icons" src="./assets/svg/icons/publish2.svg">
                
//             </button>
//             <button class="navigation" onclick="settingsOpenSidebar()">
//                <img class="editor-icons" src="./assets/svg/icons/page-settings.svg">
               
//             </button>
//         </div>
//         <div class="ai-ask">
//             <input id="promptInput" type="text" placeholder="Ecrit un article sur....">
//             <button id="generateBtn">SEND</button>
//         </div>

        
//       </div>

//     </div>
//   `;
//   popup.style.display = 'none';
//   document.body.appendChild(popup);

//   openBtn.addEventListener('click', function() {
//     popup.style.display = 'block';
//     // overlay.style.display = 'block'; // Show the overlay
//     openBtn.style.display = 'none';
//     closeBtn.style.display = 'grid';
//   });

//   closeBtn.addEventListener('click', function() {
//     popup.style.display = 'none';
//     // overlay.style.display = 'none'; // Hide the overlay
//     openBtn.style.display = 'grid';
//     closeBtn.style.display = 'none';
//   });

//   const getSiteName = localStorage.getItem('githubRepoName');
//   const navSiteName = document.getElementById('nav_sitetitle');
//   navSiteName.textContent = getSiteName;

//   const getServerName = localStorage.getItem('githubUser');
//   const navServerName = document.getElementById('nav_servertitle');
//   navServerName.textContent = getServerName;

// }

// editorMenu();

function backToSites(){
  window.location.href = "../projects/";
}

// function hideEditor() {
//   alert('hide');
//   var buttons = document.querySelectorAll(".grid-edit");
//   buttons.forEach(function(button) {
//       // Cambia el display basado en el valor actual
//       button.style.display = (button.style.display === "none") ? "flex" : "none";
//   });

//   // Actualiza el texto del botón
//   var span = document.getElementById("hide-show-editor");
//   span.textContent = (span.textContent === "Hide Editor") ? "Show Editor" : "Hide Editor";
// }

function hideEditor() {
  const grideditsections = document.getElementsByClassName('grid-edit-section');
  for (let i = 0; i < grideditsections.length; i++) {
    grideditsections[i].style.display = "none";
  }
}
