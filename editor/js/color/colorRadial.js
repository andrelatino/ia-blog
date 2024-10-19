

function radialColorBgIsSelected() {
    const getColorID = document.getElementById('color-id').textContent;
    const parentDiv = document.getElementById(getColorID);
    if (parentDiv) {
      const radialColorDiv = parentDiv.querySelector('[data-type="grid-radial-color"]');
      if (radialColorDiv) {
        radialColorDiv.classList.remove("div-hidden");
        radialColorDiv.classList.add("div-visible");
      }
      const childDivs = parentDiv.querySelectorAll('div[data-type]');
      childDivs.forEach(function(childDiv) {
        if (childDiv !== radialColorDiv) {
          childDiv.classList.remove("div-visible");
          childDiv.classList.add("div-hidden");
        }
      });
    }
  }
  
  function radialColorThumbIsSelected() {
    const parentDiv = document.getElementById('color-modal-box');
    if (parentDiv) {
      const radialColorDiv = parentDiv.querySelector('[data-type="grid-radial-color"]');
      if (radialColorDiv) {
        radialColorDiv.classList.remove("div-hidden");
        radialColorDiv.classList.add("div-visible");
      }
      const childDivs = parentDiv.querySelectorAll('div[data-type]');
      childDivs.forEach(function(childDiv) {
        if (childDiv !== radialColorDiv) {
          childDiv.classList.remove("div-visible");
          childDiv.classList.add("div-hidden");
        }
      });
    }
  }
  
  //RADIAL PICKER COLORIS

document.querySelectorAll('#radial-coloris1').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#radial-coloris-input1'
      });
      document.addEventListener('coloris:pick', event => {
          radialPickerColors(); 
      });
  });
});

document.querySelectorAll('#radial-coloris2').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#radial-coloris-input2'
      });
      document.addEventListener('coloris:pick', event => {
        radialPickerColors(); 
      });
  });
});

function radialThumbShow() {
  document.getElementById('solid-color-thumbnail').style.display = 'none';
  document.getElementById('radial-color-thumbnail').style.display = 'block';
  document.getElementById('linear-color-thumbnail').style.display = 'none';
}

var radialGradientCSS;

function radialPickerColors() {
  //SET COLOR
  const radialColorDiv1 = document.getElementById("radial-coloris1");
  const radialColorDiv2 = document.getElementById("radial-coloris2");

  const radialColor1 = window.getComputedStyle(radialColorDiv1).getPropertyValue("color");
  const radialColor2 = window.getComputedStyle(radialColorDiv2).getPropertyValue("color");
  //THUMB
  const radialGradientCSS = createRadialGradient(radialColor1, radialColor2);

  const radialColorThumbnail = document.getElementById('radial-color-thumbnail');
  radialColorThumbnail.style.background = radialGradientCSS;

  const radialGetBgId = document.getElementById('radial-bg-id');
  const radialBgId = radialGetBgId.textContent;
  const radialColorBg = document.getElementById(radialBgId);
  radialColorBg.style.background = radialGradientCSS;

  console.log('radialGradientCSS: ' + radialGradientCSS);

}


function createRadialGradient(color1, color2) {
  return `radial-gradient(circle,${color1},${color2})`; 
}

function radialReadOnlyTrue() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('radial-coloris-input');
  clrColorValue.readOnly = true; 
  coloris.readOnly = true;
}
function radialReadOnlyFalse() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('radial-coloris-input');
  clrColorValue.readOnly = false; 
  coloris.readOnly = false;
}



  // radialColorBG.style.background = radialGradientCSS;
  // const radialColorThumbnail = document.getElementById('radial-color-thumbnail');
  // radialColorThumbnail.style.background = radialGradientCSS;
  // //BG
  // const radialGetBgID = document.getElementById('radial-bg-id').textContent;
  // const radialColorBG = document.getElementById(radialGetBgID);

  // console.log(radialGradientCSS);
