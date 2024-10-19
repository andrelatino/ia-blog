function settingsOpenSidebar() {
    var settings = document.getElementById("settings-sidebar");
    if (window.innerWidth < 640) {
        settings.style.visibility = "visible";
        settings.style.transition = "right 0.5s";
        settings.style.right = "0px";
        settings.style.width = "100%";
    } else {
        settings.style.visibility = "visible";
        settings.style.transition = "right 0.5s";
        settings.style.right = "0px";
        settings.style.maxWidth = "500px";
    }
  }
  
  function settingsCloseSidebar() {
    var settings = document.getElementById("settings-sidebar");
    if (window.innerWidth < 640) {
        settings.style.transition = "right 0.5s";
        settings.style.right = "-100%";
        settings.style.width = "100%";
    } else {
        settings.style.transition = "right 0.5s";
        settings.style.right = "-500px";
    }
  }
  
  // Initialize Sets to track selected values for each select element
const headerValues = new Set();
const bodyValues = new Set();
const footerValues = new Set();

function generateScriptTags(filenames) {
  return filenames.map(filename => {
      if (filename.endsWith('.css')) {
          return `<link rel="stylesheet" href="./${filename}">`;
      } else if (filename.endsWith('.js')) {
          return `<script src="./${filename}"></script>`;
      }
  }).join('\n'); // Remove the filter condition
}

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
        const selectBody = document.getElementById('selectBody');
        const selectFooter = document.getElementById('selectFooter');

        selectHeader.innerHTML = '';
        selectBody.innerHTML = '';
        selectFooter.innerHTML = '';

        const fileNames = new Set(); // Store unique file names

        data.forEach(file => {
          if (
            (file.name.endsWith('.css') || file.name.endsWith('.js')) &&
            !fileNames.has(file.name)
          ) {
            fileNames.add(file.name);
            ['selectHeader', 'selectBody', 'selectFooter'].forEach(selectId => {
              const select = document.getElementById(selectId);
              const option = document.createElement('option');
              option.value = file.name;
              option.textContent = file.name;
              select.appendChild(option);
            });
          }
        });

        const defaultHeaderOptions = [
          { value: 'style.css', label: 'style.css', selected: true },
          // Más opciones predeterminadas para el encabezado...
        ];

        const defaultBodyOptions = [
          { value: 'script.js', label: 'script.js', selected: true},
          // Más opciones predeterminadas para el cuerpo...
        ];

        const defaultFooterOptions = [
          { value: 'style.css', label: 'style.css', selected: true},
          // Más opciones predeterminadas para el pie de página...
        ];

        initializeChoices('#selectHeader', defaultHeaderOptions, headerValues);
        initializeChoices('#selectBody', defaultBodyOptions, bodyValues);
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
      duplicateItemsAllowed: false, // Evita duplicados
      choices: defaultOptions
    });
  
    choices.passedElement.element.addEventListener('change', function() {
      selectedValuesArray.splice(0, selectedValuesArray.length, ...choices.getValue(true));
      console.log(`Selected Values for ${selectId}: `, selectedValuesArray);
    });
  
    // Manually remove duplicate items from the Choices dropdown
    const select = document.getElementById(selectId.replace('#', ''));
    select.addEventListener('addItem', function(event) {
      const selectedOption = event.detail.value;
      const selectedOptionCount = select.querySelectorAll(`[data-value="${selectedOption}"]`).length;
      if (selectedOptionCount > 1) {
        // Remove the duplicate item added by Choices.js
        choices.removeActiveItemsByValue(selectedOption);
      }
    });
  
    return choices;
  }
  

function htmlContent() {
  const headerScripts = generateScriptTags(headerValues);
  const bodyScripts = generateScriptTags(bodyValues);
  const footerScripts = generateScriptTags(footerValues);

  console.log('headerScripts: '+headerScripts)
  console.log('bodyScripts: '+bodyScripts)
  console.log('footerScripts: '+footerScripts)

  // Rest of your code for bodyContent generation

  // console.log(newSrcCss + newSrcJS);
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

  const html = `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
  <!-- Header -->
  ${headerScripts}
  </head>
  <body>
  <!-- Body -->
  ${bodyContent.innerHTML}
  ${bodyScripts}
  </body>
  <footer>
  <!-- Footer -->
  ${footerScripts}
  </footer>
  </html>
  `;
  console.log(html);
  return html;
}

// Define these variables with appropriate values
const owner = githubUser;
const repo = githubRepoName;
const path = ''; // Optional, can be a directory or a file
const token = githubApi;

loadFilesFromRepository(owner, repo, path, token);

  