// // Aplicar padding usando los valores del DOM
// function flexPadding(BOXID, min, preferred, max) {
//     const container = document.getElementById(BOXID);
//     if (container) {
//       container.style.padding = `clamp(${min}, ${preferred}, ${max})`;
//     }
//   }
  
//   // Aplicar padding y actualizar los campos de entrada
//   function flexApplyPadding(BOXID) {
//     // Obtener los valores de los campos de entrada
//     const min = document.getElementById(`min-padding-${BOXID}`).value;
//     const preferred = document.getElementById(`preferred-padding-${BOXID}`).value;
//     const max = document.getElementById(`max-padding-${BOXID}`).value;
  
//     // Aplicar padding a la caja
//     flexPadding(BOXID, min, preferred, max);
  
//     // Actualizar los valores en los campos de entrada desde el estilo aplicado
//     const container = document.getElementById(BOXID);
//     if (container) {
//       const style = window.getComputedStyle(container);
//       document.getElementById(`min-padding-${BOXID}`).value = style.paddingTop;
//       document.getElementById(`preferred-padding-${BOXID}`).value = style.paddingLeft; // Usar la propiedad adecuada si es necesario
//       document.getElementById(`max-padding-${BOXID}`).value = style.paddingBottom;
//     }
//   }
  
//   // Llamar a flexApplyPadding cuando se cambien los campos de entrada
//   document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', () => {
//       const boxID = input.id.split('-')[2];
//       flexApplyPadding(boxID);
//     });
//   });
  