


document.addEventListener('DOMContentLoaded', function() {
  alert('DOMContentLoaded event triggered');
  // Rest of the code...
});
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to handle changes in the select element
  function handleSelectChange(event) {
    console.log('Change event triggered');
    if (event.target.id === 'editor-css-select') {
      const checkSize = document.getElementById('buttonID-text').textContent;
      console.log('Button text content:', checkSize);
      if (checkSize === 'ALL') {
        console.log('Loading all CSS');
        loadALLCss();
      } else if (checkSize === 'M') {
        console.log('Loading M CSS');
        loadMCss();
      } else if (checkSize === 'XS') {
        console.log('Loading XS CSS');
        loadXSCss();
      } else {
        console.log('No matching size found');
        // Handle other cases
      }
    }
  }

  // Event listener for the change event on the select element
  document.addEventListener('change', handleSelectChange);
  console.log('Event listener added for change event');
});


function extractElementTags(sectionId) {
    // Define the array of classes to exclude
    const excludeClasses = ['toolbar-open', 'div-hidden'];
    // Define the array of data-types to exclude
    const excludeDataTypes = ['css'];
  
    // Get the section by ID
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error('Section not found.');
      return;
    }
  
    // Get the select element
    const selectElement = document.getElementById('editor-css-select');
  
    // Clear existing options
    selectElement.innerHTML = '';
  
    // Recursive function to traverse all descendant elements within the section
    function traverse(element) {
      // Check if the element should be excluded based on its class
      const shouldExcludeClass = excludeClasses.some(excludeClass => 
        element.classList.contains(excludeClass));
      // Check if the element should be excluded based on its data-type
      const shouldExcludeDataType = excludeDataTypes.some(excludeDataType =>
        element.getAttribute('data-type') === excludeDataType);
  
      if (shouldExcludeClass || shouldExcludeDataType) {
        // Skip this element and do not traverse its children
        return;
      }
  
      // Check if the element has an ID
      if (element.id) {
        // Create an option element for the tag name followed by ID
        const option = document.createElement('option');
        // Set the text content of the option to the tag name followed by ID
        option.textContent = `${element.tagName.toLowerCase()}#${element.id}`;
        // Append the option to the select element
        selectElement.appendChild(option);
      }
      
      // Recursively traverse child elements
      for (const child of element.children) {
        traverse(child);
      }
    }
  
    // Start traversal from the section itself
    traverse(section);
}

  // Simply call the function with the ID of the section you want to analyze.
  // extractElementTags('mySectionId');
  
// Function to extract the ID from the selected option and update the <span> content
// function extractAndDisplayId() {
//     // Get the select element
//     const selectElement = document.getElementById('editor-css-select');
//     // Get the selected option
//     const selectedOption = selectElement.options[selectElement.selectedIndex];
//     // Get the tag name of the selected option
//     const tagName = selectedOption.textContent;
//     // Extract the ID from the selected option
//     const id = tagName.split('#')[1];
//     // Display the ID of the corresponding element
//     if (id) {
//         // Update the content of the <span> with the ID "elementID-text"
//         const elementIdSpan = document.getElementById('elementID-text');
//         const elementName = document.getElementById('inputCssRules');
        
//         if (elementIdSpan) {
//             elementIdSpan.textContent = id;
//             elementName.textContent = tagName;

//         } else {
//             console.error('Span with ID "elementID-text" not found.');
//         }
//     } else {
//         console.error('No ID found for selected option:', tagName);
//     }
// }






// Call the function to populate the <select> element and extract the ID on page load
// extractElementTags('mTcerFh');

function inicializarTextareaConSugerencia(textareaId, textMessage) {
    const mensajeSugerencia = textMessage; // Mensaje de sugerencia común
    const textarea = document.getElementById(textareaId);
  
    // Establecer el mensaje de sugerencia inicial y el color del texto
    textarea.value = mensajeSugerencia;
    textarea.style.color = '#888';
  
    // Limpiar el mensaje de sugerencia al enfocar si aún no se ha escrito nada
    textarea.addEventListener('focus', function() {
      if (this.value === mensajeSugerencia) {
        this.value = '';
        this.style.color = 'black'; // Color del texto cuando el usuario escribe
      }
    });
  
    // Restaurar el mensaje de sugerencia al perder el foco si no se ha escrito nada
    textarea.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.value = mensajeSugerencia;
        this.style.color = '#888'; // Color del mensaje de sugerencia
      }
    });
}
  