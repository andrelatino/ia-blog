function sectionImportByUrl(url) {
    fetch(url)
      .then(response => response.json())
      .then(sectionData => {
        var sectionHtml = sectionData.sectionHtml;
        var newSectionId = `${generateRandomID(7)}`;
        let newSection = document.createElement('section');
        newSection.id = newSectionId;
        newSection.innerHTML = sectionHtml;
  
        // ... (rest of the code remains the same)
        
        // Add the new section to the "grid" div
        var grid = document.getElementById('grid');
        if (grid) {
          grid.appendChild(newSection);
        }
  
        // Add custom HTML code at the end of the new section
        var customHtml = sectionButtons();
        addCustomHTMLToImportedSection(newSectionId, customHtml);
        //savePage();
      })
      .catch(error => {
        console.error('Error importing section:', error);
      });
  }
  
  function addCustomHTMLToImportedSection(sectionId, html) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.insertAdjacentHTML('beforeend', html.trim());
    }
  }
  
  // Usage
//   sectionImportByUrl('https://example.com/section-data.json');
  