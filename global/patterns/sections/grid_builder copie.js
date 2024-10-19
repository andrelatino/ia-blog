
function _grid_builder() {

	const grid_section_id = generateRandomID(7);
  const grid_container_id = generateRandomID(7);
	const grid_content_id = generateRandomID(7);
  
  const grid_bg = generateRandomID(7);
  const bg_img = generateRandomID(7);
  const bg_color = generateRandomID(7);
  const bg_solid_color = generateRandomID(7);
  const bg_radial_color = generateRandomID(7);
  const bg_linear_color = generateRandomID(7);
  
  const bg_img_div = generateRandomID(7);
  const bg_video_div = generateRandomID(7);
  const bg_video = generateRandomID(7);

	const laptopCss = `


  grid-container#${grid_container_id} {
    position: relative;
    display:grid;
  }

  grid-bg#${grid_bg} {
    position: absolute;
    height:100%;
    width:100%;
    z-index:-1;
    display:block;
  }
  img${bg_img} {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  video${bg_video} {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  grid-bg-color#${bg_color},
  grid-solid-color#${bg_solid_color},
  grid-radial-color#${bg_radial_color},
  grid-linear-color#${bg_linear_color}{
    height:100%;
    width:100%;
  }
  
  grid-content#${grid_content_id}{
    display: grid;
  }

  `;
  
  const tabletCss = `
  
  `;
  const mobileCss = ``;

	const customHTML = `
  <section id="${grid_section_id}" data-type="section">
      
      <!--CSS-->
      <grid-css>
        <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="laptop" data-content="section">${laptopCss}</style>
        <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="tablet" data-content="section">@media screen and (min-width:641px) and (max-width:1024px){${tabletCss}}</style>
        <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="mobile" data-content="section">@media screen and (max-width:640px){${mobileCss}}</style>
      </grid-css>  
      <!--BG-->
      <grid-bg id="${grid_bg}" data-type="grid-bg">
          <!-- bg-color -->
          <grid-bg-color id="${bg_color}" data-type="grid-bg-color" class="div-visible">
            <grid-solid-color id="${bg_solid_color}" data-type="grid-solid-color" class="div-visible" style="background: rgb(0, 115, 255);"></grid-solid-color>
            <grid-radial-color id="${bg_radial_color}" data-type="grid-radial-color" class="div-hidden" style="background: radial-gradient(circle, rgb(0, 0, 0), rgb(0, 0, 0));"></grid-radial-color>
            <grid-linear-color id="${bg_linear_color}" data-type="grid-linear-color" class="div-hidden" style="background: linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0));"></grid-linear-color>
          </grid-bg-color> 
          <!-- bg-image -->
          <grid-bg-image id="${bg_img_div}" data-type="bg-image" class="div-hidden">
            <picture id="${generateRandomID(7)}">
              <source srcset media="(max-width:640px)">
              <source srcset media="(min-width:641px) and (max-width:1024px)">
              <img id="${bg_img}" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwyM3x8Zm9vZHxlbnwwfDB8fHwxNzE2ODM1NjIzfDA&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" data-type="image-bg" loading="lazy">
            </picture>
          </grid-bg-image> 
          <!-- bg-video -->
          <grid-bg-video id="${bg_video_div}" data-type="grid-bg-video" class="div-hidden">
            <video id="${bg_video}" autoplay loop muted loading="lazy" data-type="video-bg" src="https://github.com/IAMEDIA360/videos/raw/main/empty.mp4"></video>
          </grid-bg-video> 
      </grid-bg>
      <!--HTML-->
      <grid-container id="${grid_container_id}" data-type="grid-container">
      
      <grid-content id="${grid_content_id}" contenteditable="true" data-type="grid-content">
        <!--Grid Box Container-->
      </grid-content>

      <grid-section-admin class="flex-edit-buttons no-export"> 
        <button class = "grid-cols-button" onclick="openFlexItems('${grid_content_id}', 'beforeend')">+</button>
        <button contenteditable="false" class="flex-edit-button" onclick="flexSectionDelete('${grid_section_id}')">-</button>   
        <button contenteditable="false" class="flex-edit-button" onclick="toolsOpenModal(this)">&#8942;</button>
        <button contenteditable="false">Section</button>
      </grid-section-admin> 
      
    </grid-container>
      
      
      <!--JS-->
      <script id="${generateRandomID(7)}" data-type="js"></script>
      <!--EDIT-->
      <div class = "no-export" >
        
        
      </div>
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