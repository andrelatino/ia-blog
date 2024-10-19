
function _grid_builder() {

	const grid_section_id = generateRandomID(7);
  const grid_container_id = generateRandomID(7);
	const grid_content_id = generateRandomID(7);
  const grid_bg_id = generateRandomID(7);
  const grid_bg_color_id = generateRandomID(7);
  const grid_bg_image_id = generateRandomID(7);
  const grid_bg_video_id = generateRandomID(7);
  const video_id = generateRandomID(7);
  const img_id = generateRandomID(7);

	const laptopCss = `
  
  grid-content#${grid_content_id}{
    display: grid;
    padding:0px;
    min-height:100px;
    grid-template-columns:1fr;
  }
  `;
  
  const tabletCss = `
  grid-content#${grid_content_id}{
    display: grid;
  }
  `;
  const mobileCss = `
  grid-content#${grid_content_id}{
    display: grid;
  }`;

	const customHTML = `
  <section id="${grid_section_id}" data-type="section-container">  
      <!--CSS-->
      <grid-css>
        <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="laptop" data-content="section">${laptopCss}</style>
        <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="tablet" data-content="section">@media screen and (min-width:641px) and (max-width:1024px){${tabletCss}}</style>
        <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="mobile" data-content="section">@media screen and (max-width:640px){${mobileCss}}</style>
      </grid-css>  
      <!--BG-->
      <grid-bg id="${grid_bg_id}" data-type="grid-bg">
          <!-- bg-color -->
          <grid-bg-color id="${grid_bg_color_id}" data-type="grid-bg-color" class="div-visible" style="background-color: rgba(255, 255, 255, 1);"></grid-bg-color> 
          <!-- bg-image -->
          <grid-bg-image id="${grid_bg_image_id}" data-type="grid-bg-image" class="div-hidden">
            <picture id="${generateRandomID(7)}">
              <source srcset media="(max-width:640px)">
              <source srcset media="(min-width:641px) and (max-width:1024px)">
              <img id="${img_id}" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwyM3x8Zm9vZHxlbnwwfDB8fHwxNzE2ODM1NjIzfDA&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" data-type="image-bg" loading="lazy">
            </picture>
          </grid-bg-image> 
          <!-- bg-video -->
          <grid-bg-video id="${grid_bg_video_id}" data-type="grid-bg-video" class="div-hidden">
            <video id="${video_id}" autoplay loop muted loading="lazy" data-type="video-bg" src="https://github.com/IAMEDIA360/videos/raw/main/empty.mp4"></video>
          </grid-bg-video> 
      </grid-bg>
      <!-- grid-container -->
      <grid-container id="${grid_container_id}" data-type="grid-container" >
        <!-- grid-content -->
        <grid-content id="${grid_content_id}"  contenteditable="false" data-type="html"></grid-content>
        <grid-edit-section class="grid-edit-section no-export" contenteditable="false" data-type="grid-edit-section"> 
          <div class= "edit-ia">
            <button contenteditable="false" class = "section-assistant-btn" onclick="openIaAssistant('${grid_section_id}','${grid_content_id}')"><img src="${iconAssistant}"> IA Assistant </button>
            <button contenteditable="false" class = "section-shortcuts-btn" onclick="openIaShorcuts('${grid_content_id}')"><img src="${iconShortcuts}"> IA Shortcuts</button>
          </div>
          <div class= "edit-settings">
            <button contenteditable="false" class = "section-open-modal" onclick="toolsOpenModal(this)">&#8942;</button>
          </div>
        </grid-edit-section> 
      </grid-container>
      <!--JS-->
        <script id="${generateRandomID(7)}" data-type="js"></script>  
  </section>
  `;
  const addSectionToGrid = document.getElementById('grid-body');
	addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
	const sections = document.querySelectorAll("section");
	const newSection = sections[sections.length - 1];
	newSection.scrollIntoView({
		behavior: "smooth"
	});

}