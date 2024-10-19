
  
  function _test() { 
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

    const item2_id = generateRandomID(7);
    const item2_css = item2_id;

    const item3_id = generateRandomID(7);
    const item3_css = item3_id;

    const item4_id = generateRandomID(7);
    const item4_css = item4_id;
    

    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100vw;height:100vh;position:relative}}
    @media screen and (min-width:0px){#${grid_css}{width:100%;height:100%;display:grid;place-content:center; grid-template-columns: 1fr 1fr;}}
    @media screen and (min-width:0px){#${item1_css}{object-fit:cover;height:100%;min-height:100vh;width:100%}}
    @media screen and (min-width:0px){#${item2_css}{object-fit:cover;height:100%;min-height:100vh;width:100%}}
    @media screen and (max-width:640px){#${grid_css}{width:100%;height:100%;display:grid;place-content:center; grid-template-columns: 1fr;}}
    @media screen and (max-width:640px){#${item1_css}{object-fit:cover;height:100%;min-height:50vh;width:100%}}
    @media screen and (max-width:640px){#${item2_css}{object-fit:cover;height:100%;min-height:50vh;width:100%}}
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
    <style id="${generateRandomID(7)}" type="text/css">
      ${customCSS}
    </style>
    
      <div id="${grid_id}" data-type="grid">
 
          <img id="${item1_id}" src="https://images.unsplash.com/photo-1596854307943-279e29c90c14?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwyMHx8Y2F0c3xlbnwwfDB8fHwxNzA4NzE2OTM5fDA&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" data-type="img-grid" loading="lazy">
          <img id="${item2_id}" src="https://images.unsplash.com/photo-1631722670977-60c8b22dfcaf?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwxOHx8cGFyZnVtfGVufDB8MHx8fDE3MDg3MTc2MTV8MA&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" data-type="img-grid" loading="lazy">
         
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