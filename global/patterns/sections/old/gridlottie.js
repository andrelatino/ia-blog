
  
  function _gridlottie() { 
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

    const item2_h1_id = generateRandomID(7);
    const item2_h1_css = item2_h1_id;
    
    const item2_p_id = generateRandomID(7);
    const item2_p_css = item2_p_id;

    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100vw;height:100vh;position:relative}}

    @media screen and (min-width:0px){#${grid_css}{width:100%;height:100%;display:grid;place-content:center; grid-template-columns: 1fr 1fr;}}
    @media screen and (min-width:0px){#${item1_css}{object-fit:cover;height:100%;min-height:100vh;width:100%;background:white;}}
    @media screen and (min-width:0px){#${item2_css}{display:grid;place-content:center;padding:5%; background:white;}}
    @media screen and (min-width:0px){#${item2_h1_css}{font-size: clamp(3rem, 6vw, 8rem);line-height:1;}}
    @media screen and (min-width:0px){#${item2_p_css}{font-size:1rem;}}

    @media screen and (max-width:640px){#${grid_css}{width:100%;height:100%;display:grid;place-content:center; grid-template-columns: 1fr;}}
    @media screen and (max-width:640px){#${item1_css}{object-fit:cover;height:100%;min-height:50vh;width:100%; display:grid;order:1;}}
    @media screen and (max-width:640px){#${item2_css}{min-height:50vh;display:grid;place-content:end;padding:10%; background:white;}}
    
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section" data-type="css">
      <style id="${generateRandomID(7)}" type="text/css">
        ${customCSS}
      </style>
      
        <div id="${grid_id}" data-type="grid">
        
        <lottie-player
          autoplay
          controls
          loop
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style="width: 320px"
        ></lottie-player>
      
        <div id="${item2_id}">
          <h1 id="${item2_h1_id}" contenteditable="true"> Devenez Expert en IA Generative! </h1>
          <p id="${item2_p_id}" contenteditable="true"> Lorem ipsum dolor sit amet </p>
          <div id="${generateRandomID(7)}">
            <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM IPSUM</a>
            <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM IPSUM</a>
          </div>
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