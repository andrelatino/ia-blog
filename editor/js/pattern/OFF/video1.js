function generateRandomID(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function patternVideo1() {
  const addSectionToGrid = document.getElementById("grid");

  const sectionID = generateRandomID(7);
  const containerID = generateRandomID(7);
  const containerCss = containerID;
  const imageID = generateRandomID(7);
  const imageCss = imageID;
  const videoID = generateRandomID(7);
  const videoCss = videoID;

  const customCSS = `
  @media screen and (min-width:0px){#${containerCss}{width:100vw;height:100vh;position:relative}}
  @media screen and (min-width:0px){#${imageCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-1;}}
  @media screen and (min-width:0px){#${videoCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-1;}}
  `;

  const customHTML = `
      <section id="${sectionID}" data-type="section">
          <style id="${generateRandomID(7)}" type="text/css">${customCSS}</style>
          <div id="${generateRandomID(7)}" data-type="background">
              <video id="${videoID}" autoplay loop muted>
                <source src="./assets/video/pc.mp4" type="video/mp4">
              </video>
          </div>
          <button class="toolbar-open" onclick="toolsOpenModal(this);">
              <img src="./assets/svg/icons/settings.svg">
          </button>
      </section>
  `;

  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);

  // Desplazamiento suave hacia la nueva sección
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });
}
