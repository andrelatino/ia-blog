
  
  function _logos() { 
    // alert('menu');
    //MAIN
    const addSectionToGrid = document.getElementById("grid");
    const section_id = generateRandomID(7);
    const section_css = section_id;
    //GRID
    const grid_id = generateRandomID(7);
    const grid_css = grid_id;

    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100%;height:100%;}}
    @media screen and (min-width:0px){#${grid_css}{width:100px;height:100px;display:grid;grid-template-columns:repeat(4,1fr);}}
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css" data-type="css">
        ${customCSS}
      </style>
      
        <div id="${grid_id}" data-type="grid">
          <div id="${generateRandomID(7)}" class="grid-item">
            <img id="${generateRandomID(7)}" src="https://raw.githubusercontent.com/IAMEDIA360/images/main/empty.svg" data-type="img-grid" loading="lazy">
            <p id="${generateRandomID(7)}" contenteditable="true">Midjourney</p>  
          </div>
          <div id="${generateRandomID(7)}" class="grid-item">
            <img id="${generateRandomID(7)}" src="https://raw.githubusercontent.com/IAMEDIA360/images/main/empty.svg" data-type="img-grid" loading="lazy">
            <p id="${generateRandomID(7)}" contenteditable="true">Midjourney</p>  
          </div>
          <div id="${generateRandomID(7)}" class="grid-item">
            <img id="${generateRandomID(7)}" src="https://raw.githubusercontent.com/IAMEDIA360/images/main/empty.svg" data-type="img-grid" loading="lazy">
            <p id="${generateRandomID(7)}" contenteditable="true">Midjourney</p>  
          </div>
          <div id="${generateRandomID(7)}" class="grid-item">
            <img id="${generateRandomID(7)}" src="https://raw.githubusercontent.com/IAMEDIA360/images/main/empty.svg" data-type="img-grid" loading="lazy">
            <p id="${generateRandomID(7)}" contenteditable="true">Midjourney</p>  
          </div>
        </div>


      <button class="toolbar-open" onclick="toolsOpenModal(this)">
        <img src="../global/file/edit-section.svg" data-type="img-edit">
      </button>
  </section>
  
    `;
    addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
    const sections = document.querySelectorAll("section");
    const newSection = sections[sections.length - 1];
    newSection.scrollIntoView({ behavior: "smooth" });  
    //savePage();
    }