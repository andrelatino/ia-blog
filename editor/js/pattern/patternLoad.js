// function loadSectionTemplates() {
//     // Fetch the JSON data
//     fetch('/patterns.json')
//         .then(response => response.json())
//         .then(data => {
//             // Get the div element by its id
//             const patternSidebarGrid = document.getElementById('pattern-sidebar-grid');

//             // Loop through each section template
//             data.forEach(section => {
//                 // Create a new div element
//                 const sectionDiv = document.createElement('div');
//                 sectionDiv.id = section.sectionId;
//                 sectionDiv.innerHTML = section.sectionHtml;
                
//                 // Append the section to the pattern-sidebar-grid div
//                 patternSidebarGrid.appendChild(sectionDiv);
//             });
//         })
//         .catch(error => console.error('Error loading section templates:', error));
// }

// // Call the function to load section templates
// loadSectionTemplates();
