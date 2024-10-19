
// function getUrlParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
// }
// window.onload = function() {
//     const encodedValue = getUrlParameter('id');
//     const decodedValues = JSON.parse(atob(encodedValue));
//     for (const item of decodedValues) {
        
//         var devJsonRaw = item.devJsonRaw;
//         // var pageTitleRepo = item.repoName;
//         // var pageTitlePath = item.indexHtmlPath;
//         // var fullTitlePage = pageTitleRepo+'/'+pageTitlePath;
//         importPageFromURL(devJsonRaw);
//         // console.log(decodedValues);
//         var base = item.base;
//         var createUrl = base;
//         var titleText = document.getElementById('site-title');
//         titleText.innerHTML = `<a href='${createUrl}'>${createUrl}</a>`;
//         // console.log(fullTitlePage);
//         // console.log(createUrl);
//     }
// };

// function importPageFromURL(url) {
//   console.log('import JSON URL');
//   fetch(url)
//     .then(response => response.json())
//     .then(sectionData => {
//       var sectionsHtml = sectionData.pageHtml;

//       // Insert the HTML content directly into the "grid" div
//       var grid = document.getElementById('grid');
//       if (grid) {
//         grid.innerHTML = sectionsHtml;
//       }
//     })
//     .catch(error => {
//       console.error('Error importing page:', error);
//     });
// }


// function generateRandomID(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
//     return result;
// }
// function addCustomHTMLToImportedSection(sectionId, html) {
//     var section = document.getElementById(sectionId);
//     if (section) {
//         section.insertAdjacentHTML('beforeend', html.trim());
//     }
// }
// // function sectionButtons() {
// //     return `
// //     <div class="admin-buttons">
// //         <div class="section-toolbar">
// //           <button class="delete-section" onclick="sectionDelete(this);">
// //             <img src="./assets/svg/icons/delete.svg"><span class="icon-text">Delete</span>
// //           </button>
// //           <button class="duplicate-section" onclick="sectionDuplicate(this);">
// //             <img src="./assets/svg/icons/duplicate.svg"><span class="icon-text">Duplicate</span>
// //           </button>
// //           <button class="move-up-section" onclick="sectionMoveUp(this);">
// //             <img src="./assets/svg/icons/up.svg"><span class="icon-text">Move Up</span>
// //           </button>
// //           <button class="move-down-section" onclick="sectionMoveDown(this);">
// //             <img src="./assets/svg/icons/down.svg"><span class="icon-text">Move Down</span>
// //           </button>
// //           <button class="export-section" onclick="sectionExport(this);">
// //             <img src="./assets/svg/icons/export.svg"><span class="icon-text">Export</span>
// //           </button>
// //           <button class="replace-section" onclick="sectionReplace(this);">
// //             <img src="./assets/svg/icons/import.svg"><span class="icon-text">Replace</span>
// //           </button>
// //           <button class="image-section" onclick="sectionImage(this); imageAllButton();">
// //             <img src="./assets/svg/icons/image.svg"><span class="icon-text">Replace</span>
// //           </button>
// //           <button class="responsive-section" onclick="showSectionModal(this);">
// //             <img src="./assets/svg/icons/resize4.svg"><span class="icon-text">Responsive</span>
// //           </button>
// //       </div>
// //     </div> 
// //     `;
// // }