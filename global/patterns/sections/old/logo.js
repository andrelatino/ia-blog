
  
  function _logo() { 
    // alert('menu');
    //MAIN
    const addSectionToGrid = document.getElementById("grid");
    const section_id = generateRandomID(7);
    const section_css = section_id;
    //GRID
    const grid_id = generateRandomID(7);
    const grid_css = grid_id;
    //ITEMS
    const item1_id = generateRandomID(7);
    const item1_css = item1_id;


    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100px;height:100px;position:absolute;z-index:1;top:0;left:0;margin:15px;}}
    @media screen and (min-width:0px){#${grid_css}{width:100px;height:100px;display:grid;place-content:center;}}
    @media screen and (min-width:0px){#${item1_css}{height:100%;width:100%;}}
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css" data-type="css">
        ${customCSS}
      </style>
      
        <div id="${grid_id}" data-type="grid">
            <img id="${item1_id}" src="https://raw.githubusercontent.com/IAMEDIA360/images/main/empty.svg" data-type="img-grid" loading="lazy">    
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