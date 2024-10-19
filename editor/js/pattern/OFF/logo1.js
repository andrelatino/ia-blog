function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
}

function patternLogo1() {
  const sectionID = generateRandomID(7);
  const sectionCss = sectionID;
  const imageID = generateRandomID(7);
  const imageCss = imageID;

  const addSectionToGrid = document.getElementById("grid");
  const customCSS = `
  @media screen and (min-width:0px){#${sectionCss}{width:100vw;height:100vh;position:relative}}
  @media screen and (min-width:0px){#${imageCss}{width:300px;height:100px;position:absolute;top:15px;left:15px}}
  `;
  const customHTML = `
    <section id="${sectionID}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css">${customCSS}</style>
      <picture id="${generateRandomID(7)}">
          <source srcset media="(max-width:640px)">
          <source srcset media="(min-width:641px) and (max-width:768px)">
          <source srcset media="(min-width:769px) and (max-width:1024px)">
          <source srcset media="(min-width:1025px) and (max-width:1280px)">
          <source srcset media="(min-width:1281px)">        
          <img id="${imageID}" src="https://icheff.github.io/energia.fr/media/images/logo-white1.svg" data-type="img-bg" loading="lazy">
      </picture>
      <button class="toolbar-open" onclick="toolsOpenModal(this);">
        <img src="./assets/svg/icons/settings.svg">
      </button>
    </section>
  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
  //savePage();
}