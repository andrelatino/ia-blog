
//START CHOICE
// document.addEventListener('DOMContentLoaded', function() {
//   // Asegurándote de que el elemento 'grid' exista en tu HTML
//   var gridExist = document.getElementById('grid'); // Asegúrate de reemplazar 'idDelElementoGrid' con el ID real del elemento.
  
//   if (gridExist) {
//       alert('grid exist');
//   } else {
//       alert('grid does not exist');
//   }
// });


function generateScriptTags(filenames) {
  return filenames.map(filename => {
      if (filename.endsWith('.css')) {
          return `<link rel="stylesheet" href="./${filename}">`;
      } else if (filename.endsWith('.js')) {
          return `<script src="./${filename}"></script>`;
      }
  }).join('\n'); // Remove the filter condition
}

function checkDefaultValues() {
  setTimeout(function() {
      var headerSelect = document.getElementById("selectHeader");
      // var bodySelect = document.getElementById("selectBody");
      var footerSelect = document.getElementById("selectFooter");

      console.log("Valores predeterminados del Header:", getSelectedValues(headerSelect));
      // console.log("Valores predeterminados del Body:", getSelectedValues(bodySelect));
      console.log("Valores predeterminados del Footer:", getSelectedValues(footerSelect));
  }, 1000); // Ajusta el tiempo según sea necesario
}

function getSelectedValues(selectElement) {
  var result = [];
  var options = selectElement && selectElement.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
          result.push(opt.value || opt.text);
      }
  }
  return result;
}

// Llama a la función para ejecutarla después de que se hayan cargado los valores
// checkDefaultValues(); // Llámalo después de que se hayan agregado los valores dinámicamente


var headerValues = [];
var bodyValues = [];   // Added for body
var footerValues = []; // Added for footer

var defaultHeaderOptions = [{ value: 'style.css', label: 'style.css', selected: true },];
var defaultBodyOptions = [{ value: 'script.js', label: 'script.js', selected: true},];
var defaultFooterOptions = [{ value: 'style.css', label: 'style.css', selected: true},];

checkDefaultValues();

async function loadFilesFromRepository(owner, repo, path, token) {
  try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {

              

              const selectHeader = document.getElementById('selectHeader');
              // const selectBody = document.getElementById('selectBody');
              const selectFooter = document.getElementById('selectFooter');

              selectHeader.innerHTML = '';
              // selectBody.innerHTML = '';
              selectFooter.innerHTML = '';

              const fileNames = new Set();
              data.forEach(file => {

                console.log(file.name);
                


                  if ((file.name.endsWith('.css') || file.name.endsWith('.js')) && !fileNames.has(file.name)) {
                      fileNames.add(file.name);


                      
                      ['selectHeader', 'selectFooter'].forEach(selectId => {
                          const select = document.getElementById(selectId);
                          const option = document.createElement('option');
                          option.value = file.name;
                          option.textContent = file.name;
                          select.appendChild(option);
                      });
                  }
              });

              initializeChoices('#selectHeader', defaultHeaderOptions, headerValues);
              // initializeChoices('#selectBody', defaultBodyOptions, bodyValues);
              initializeChoices('#selectFooter', defaultFooterOptions, footerValues);


          } else {
              console.error('Invalid response data');
          }
      } else {
          console.error(`Failed to fetch repository contents: ${response.status}`);
      }
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

function initializeChoices(selectId, defaultOptions, selectedValuesArray) {
  const choices = new Choices(selectId, {
    removeItemButton: true,
    allowHTML: true,
    duplicateItemsAllowed: false,
    choices: defaultOptions
    
  });

  choices.passedElement.element.addEventListener('change', function() {
    
    selectedValuesArray.splice(0, selectedValuesArray.length, ...choices.getValue(true));
    console.log(`Selected Values for ${selectId}: `, selectedValuesArray);
  });

  return choices;
}

function htmlContent() {
  
  const headerScripts = generateScriptTags(headerValues);
  // const bodyScripts = generateScriptTags(bodyValues);
  const footerScripts = generateScriptTags(footerValues);

  console.log('headerScripts: '+headerScripts)
  // console.log('bodyScripts: '+bodyScripts)
  console.log('footerScripts: '+footerScripts)

  // Rest of your code for bodyContent generation

  // console.log(newSrcCss + newSrcJS);
const grid = document.getElementById('grid-page');
const bodyContent = grid.cloneNode(true);
const deleteButtons = bodyContent.querySelectorAll('.toolbar-open');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].remove();
}
const contentItems = bodyContent.querySelectorAll('[contenteditable="true"]');
for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].removeAttribute('contenteditable');
}

// Add code to remove div elements with class 'div-hidden'
const hiddenDivs = bodyContent.querySelectorAll('.div-hidden');
for (let i = 0; i < hiddenDivs.length; i++) {
    hiddenDivs[i].remove();
}

// Add code to remove div elements with class 'div-hidden'
const noExport = bodyContent.querySelectorAll('.no-export');
for (let i = 0; i < noExport.length; i++) {
  noExport[i].remove();
}

let checkPageIs = localStorage.getItem('pageIs');
let html;
let headerJS;
let headerJSON;
let footerJS;
let footerJSON;

if (checkPageIs === '.home') {
  console.log('is home');
  styleCSS = './scripts/styles.css';
  headerJS = './scripts/header.js';
  headerJSON = './scripts/header.json';
  footerJS = './scripts/footer.js';
} else if(checkPageIs === '.page'){
  console.log('is page');
  styleCSS = '../scripts/styles.css';
  headerJS = '../scripts/header.js';
  headerJSON = '../scripts/header.json';
  footerJS = '../scripts/footer.js';
} 

  html = `
  <!DOCTYPE html>
  <html lang="fr">
  <!-- Header -->
  <head>
  <!-- Reset CSS -->
  <style>html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;-webkit-font-smoothing:antialiased;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}ul{list-style:none;}button,input,select{margin:0;}html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}img,video{height:auto;max-width:100%;}iframe{border:0;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;}a{text-decoration:none;}a:hover{text-decoration:underline;}</style>
  <link rel="stylesheet" type="text/css" href=${styleCSS}>
  <meta charset="UTF-8">
  <meta name="google" content="notranslate">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Preconnect to the Google Fonts server -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Load the Material Symbols Outlined font with display=swap -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" />
  </head>
  <!-- Body -->
  <body>
  <grid-page id="grid" class="grid-page" data-type="body">
  <div id="header"></div>
  <script src=${headerJS}></script>
  ${bodyContent.innerHTML}
  <div id="footer-menu"></div>
  </grid-page>
  <div id="sidebar"></div>
  <div id="footer"></div>
  <script src=${footerJS}></script>
  </body>
  </html>
  `;


console.log(html);
return html;



}

// htmlContent();

// Define these variables with appropriate values
const owner = githubUser;
const repo = githubRepoName;
const path = ''; // Optional, can be a directory or a file
const token = githubApi;

loadFilesFromRepository(owner, repo, path, token);

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }


//   function cssPageStyles() {
//     // const pageID = localStorage.getItem('pageID');
//     const cssPage = `
//         <style id="page-laptop.css" type="text/css" data-type="css" data-size="laptop" data-content="page">grid-page{background:red;}</style>
//         <style id="page-tablet.css" type="text/css" data-type="css" data-size="tablet" data-content="page">@media screen and (min-width:641px) and (max-width:1024px){}</style>
//         <style id="page-mobile.css" type="text/css" data-type="css" data-size="mobile" data-content="page">@media screen and (max-width:640px){}</style>
//     `;
    
//     return cssPage;
// }

// const gridPage = document.getElementById('grid');
// gridPage.insertAdjacentHTML('afterbegin', cssPageStyles());
