
function getColors(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {

      const colorTotal = data.length;
      document.getElementById('color-sidebar-total').textContent = colorTotal + " colors";

      const colorGrid = document.getElementById('color-sidebar-grid');
      colorGrid.innerHTML = ''; // Clear existing color items

      for (const api of data) {
        const colorItems = document.createElement('div');

        colorItems.className = 'color-sidebar-items';
        colorItems.innerHTML = `
          <div class="color-html" style="background:${api.hex};"></div>
          <div class="color-sidebar-alt">
            <p class="color-sidebar-url">${api.hex}</p>
            <p class="color-sidebar-url">${api.name}</p>
          </div>
        `;

          // Add event listener to each color item
          colorItems.addEventListener('click', () => {
            // alert(api.hex);
            
            const rgb = hexToRgb(api.hex);
            console.log(rgb);
            //GET COLOR
            const getDefaultColor = rgb;

            const solidBgId = document.getElementById('solid-bg-id').textContent;
            const solidAddBgColor = document.getElementById(solidBgId);
            solidAddBgColor.style.background = getDefaultColor;
            // solidBackground.style.background = getDefaultColor;
            //THUMB
            const solidColorThumb = document.getElementById('solid-color-thumbnail');
            solidColorThumb.style.background = getDefaultColor;
            //Button
            const solidColorPickerDiv = document.getElementById("solid-coloris");
            solidColorPickerDiv.style.color = getDefaultColor; 

            const solidColorInput = document.getElementById("solid-coloris-input");
            solidColorInput.value = getDefaultColor;
            // solidUpdateBg(api.hex);
            // const hexValue = api.hex;
            // document.getElementById('uVoJtob').style.background = hexValue;
          });

        colorGrid.appendChild(colorItems);
      }
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
}


// Usage example:
// Add event listeners to the buttons


  getColors("../global/json/colors/red.json");



document.getElementById('color-orange').addEventListener('click', function() {
  getColors("../global/json/colors/orange.json");
  
});

document.getElementById('color-yellow').addEventListener('click', function() {
  getColors("../global/json/colors/yellow.json");
  
});

document.getElementById('color-green').addEventListener('click', function() {
  getColors("../global/json/colors/green.json");
  
});

document.getElementById('color-red').addEventListener('click', function() {
  getColors("../global/json/colors/red.json");
  
});

document.getElementById('color-blue').addEventListener('click', function() {
  getColors("../global/json/colors/blue.json");
  
});

document.getElementById('color-turquoise').addEventListener('click', function() {
  getColors("../global/json/colors/turquoise.json");
  
});

document.getElementById('color-pink').addEventListener('click', function() {
  getColors("../global/json/colors/pink.json");
  
});


document.getElementById('color-purple').addEventListener('click', function() {
  getColors("../global/json/colors/purple.json");
  
});

document.getElementById('color-white').addEventListener('click', function() {
  getColors("../global/json/colors/white.json");
  
});

document.getElementById('color-gray').addEventListener('click', function() {
  getColors("../global/json/colors/gray.json");
});

document.getElementById('color-brown').addEventListener('click', function() {
  getColors("../global/json/colors/brown.json");
  
});

document.getElementById('color-black').addEventListener('click', function() {
  getColors("../global/json/colors/black.json");
  
});

document.getElementById('color-turquoise').addEventListener('click', function() {
  getColors("../global/json/colors/turquoise.json");
  
});


document.getElementById('color-pink').addEventListener('click', function() {
  getColors("../global/json/colors/pink.json");
  
});






function removeExistingColor() {
  var colorItems = document.querySelectorAll(".color-sidebar-items");
  for (var i = 0; i < colorItems.length; i++) {colorItems[i].remove();}
}
 
function searchColor() {
  removeExistingColor();
  getColors(); 
}


// document.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13 && event.target.id === "color-sidebar-input") {
//     searchColor();
//   }
// });



function openSolidSidebar() {
  // alert('openSolidSidebar');
  color = document.getElementById("color-solid-sidebar");
  color.style.bottom = "0px";
  color.style.transition = "bottom 0.5s";
}

function closeSolidSidebar() {
  color = document.getElementById("color-solid-sidebar");
  color.style.bottom = "-135px";
  color.style.transition = "bottom 0.5s";
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  var r = parseInt(hex.slice(0, 2), 16);
  var g = parseInt(hex.slice(2, 4), 16);
  var b = parseInt(hex.slice(4, 6), 16);

  // Return the RGB format as a string
  return `rgb(${r}, ${g}, ${b})`;
}

// Example usage:
// var hexColor = "#0051FF"; // Replace this with your hex color
// var rgbColor = hexToRgb(hexColor);
// console.log(rgbColor); // Outputs "rgb(0, 81, 255)"

