function solidColorBgIsSelected() {
  const getColorID = document.getElementById('color-id').textContent;
  const parentDiv = document.getElementById(getColorID);
  if (parentDiv) {
    const solidColorDiv = parentDiv.querySelector('[data-type="grid-solid-color"]');
    if (solidColorDiv) {
      solidColorDiv.classList.remove("div-hidden");
      solidColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== solidColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

function solidColorThumbIsSelected() {
  const parentDiv = document.getElementById('color-modal-box');
  if (parentDiv) {
    const solidColorDiv = parentDiv.querySelector('[data-type="grid-solid-color"]');
    if (solidColorDiv) {
      solidColorDiv.classList.remove("div-hidden");
      solidColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== solidColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

//SOLID
document.querySelectorAll('#solid-coloris').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#solid-coloris-input',
      });
      document.addEventListener('coloris:pick', event => {
        solidPickerColor();
      });
  });
});

function solidThumbShow() {
  //THUMB
  document.getElementById('solid-color-thumbnail').style.display = 'block';
  document.getElementById('radial-color-thumbnail').style.display = 'none';
  document.getElementById('linear-color-thumbnail').style.display = 'none';
}

function solidPickerColor() {
  //SET COLOR
  const divElement = document.getElementById("solid-coloris");
  const colorValue = window.getComputedStyle(divElement).getPropertyValue("color");
  //THUMB
  const solidColorThumbnail = document.getElementById('solid-color-thumbnail');
  solidColorThumbnail.style.background = colorValue;
  // alert(colorValue);
  //BG
  const solidGetBgID = document.getElementById('solid-bg-id').textContent;
  const solidColorBG = document.getElementById(solidGetBgID);
  solidColorBG.style.background = colorValue;

  
}


function solidReadOnlyTrue() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('solid-coloris-input');
  clrColorValue.readOnly = true; 
  coloris.readOnly = true;
}
function solidReadOnlyFalse() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('solid-coloris-input');
  clrColorValue.readOnly = false; 
  coloris.readOnly = false;
}
