// function handleVideoClick(event) {
//     // Asegúrate de que el evento se origine de un video con data-type="vid-grid"
//     if (event.target.dataset.type === "vid-grid") {
//         const videoID = event.target.id;
//         console.log('Video ID:', videoID);
//     }
// }

// function observeVideos() {
//     // Selecciona el contenedor por su ID 'grid'
//     const container = document.getElementById('FoNClwQ'); // También podría usar document.querySelector('#grid');

//     // Verifica si el contenedor existe
//     if (!container) {
//         console.error('Contenedor de videos no encontrado.');
//         return;
//     }

//     // Función callback que se ejecuta cuando se detectan mutaciones
//     const callback = function(mutationsList, observer) {
//         for (const mutation of mutationsList) {
//             if (mutation.type === 'childList') {
//                 mutation.addedNodes.forEach(node => {
//                     // Verifica si el nodo agregado es un elemento de video y tiene el data-type esperado
//                     if (node.nodeType === Node.ELEMENT_NODE && node.matches('video[data-type="vid-grid"]')) {
//                         // Agrega el controlador de eventos
//                         node.addEventListener('click', handleVideoClick);
//                     }
//                 });
//             }
//         }
//     };

//     // Crea una instancia de MutationObserver y pasa la función callback
//     const observerXX = new MutationObserver(callback);

//     // Opciones de configuración para el observer: observa la adición de hijos
//     const config = { childList: true, subtree: true };

//     // Inicia la observación
//     observerXX.observe(container, config);
// }

// // Inicia el observer cuando el DOM está completamente cargado
// document.addEventListener('DOMContentLoaded', observeVideos);
