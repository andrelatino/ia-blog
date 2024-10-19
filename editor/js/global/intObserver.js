// function setupImageObserver() {
//     alert('observer here');
//     const grid = document.getElementById('grid-body');
//     if (!grid) {
//       console.log('Error: Elemento #grid-body no encontrado.');
//       return;
//     }

//     // Función para manejar clics en las imágenes
//     function image_FG_Event(event) {
//       console.log('Clic detectado en un elemento:', event.target);
//       if (event.target.tagName === 'IMG' && event.target.getAttribute('data-type') === 'image-fg' && event.target.id) {
//         console.log('Image ID:', event.target.id);
//       }
//     }
  
//     // Asigna manejadores de clic a todas las imágenes existentes
//     const existingImages = grid.querySelectorAll('img[data-type="image-fg"]');
//     existingImages.forEach(img => {
//       img.addEventListener('click', image_FG_Event);
//       console.log('Manejador de clic asignado a imagen existente:', img);
//     });

//     // Configurar el observador para monitorear cambios en el contenedor
//     const observer = new MutationObserver((mutations) => {
//       console.log('Mutaciones detectadas:', mutations);
//       mutations.forEach((mutation) => {
//         mutation.addedNodes.forEach((node) => {
//           console.log('Nuevo nodo detectado:', node);
//           if (node.tagName === 'IMG' && node.getAttribute('data-type') === 'image-fg') {
//             console.log('Agregando listener de clic a imagen:', node);
//             node.addEventListener('click', image_FG_Event);
//           }
//         });
//       });
//     });
  
//     // Configurar el observador para escuchar la adición de elementos al DOM
//     observer.observe(grid, { childList: true, subtree: true });
//     console.log('Observador configurado para el elemento:', grid);
// }

// // Asegurar que el observador se establezca cuando el DOM esté listo
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM completamente cargado. Estableciendo observador de imágenes.');
//     setupImageObserver();
// });
