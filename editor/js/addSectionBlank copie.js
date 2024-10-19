function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
}

function addSectionBlank() {
  const addSectionToGrid = document.getElementById("grid");
  const customCSS = ``;
  const customHTML = `
    <section id="${generateRandomID(7)}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css">${customCSS}</style>
      <div id="${generateRandomID(7)}" data-type="container">
          <picture id="${generateRandomID(7)}">
            <source srcset media="(max-width:640px)">
            <source srcset media="(min-width:641px) and (max-width:768px)">
            <source srcset media="(min-width:769px) and (max-width:1024px)">
            <source srcset media="(min-width:1025px) and (max-width:1280px)">
            <source srcset media="(min-width:1281px)">        
            <img id="${generateRandomID(7)}" src="./assets/image/tapas-hero1.png" data-type="img-bg">
          </picture>
          <div id="${generateRandomID(7)}" data-type="content">
            <div id="${generateRandomID(7)}">
              <h2 id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet</h2>
              <p id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet consectur et sermont...</p>
              <div id="${generateRandomID(7)}">            
                  <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM IPSUM</a>          
                  <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM IPSUM</a>
              </div>
            </div>
          </div>
      </div>
      ${sectionButtons()}
    </section>
  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
  //savePage();
}