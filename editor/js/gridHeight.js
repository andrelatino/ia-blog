// function setupGridHeight() {
//   // const gridWrapper = document.querySelector('#grid-wrapper');
//   const grid = document.querySelector('#grid');
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       if (mutation.type === 'childList') {
//         const sections = grid.querySelectorAll('section');
//         let newHeight = `${100 / 0.7 * sections.length}px`; // Adjust for scaling
//         const minHeight = 100; // Minimum 100 pixels from the bottom

//         // Ensure there is at least 100px from the bottom
//         if (parseInt(newHeight) < minHeight) {
//           newHeight = `${minHeight}px`;
//         }

//         grid.style.height = newHeight;
//         localStorage.setItem('gridHeight', newHeight);
//       }
//     }
//   });

//   // Retrieve height from local storage on page load
//   const savedHeight = localStorage.getItem('gridHeight');
//   if (savedHeight) {
//     grid.style.height = savedHeight;
//   }

//   observer.observe(grid, { childList: true });
// }
