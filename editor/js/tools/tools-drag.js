// // script.js

// document.addEventListener('DOMContentLoaded', function () {
//     let draggableSpans = document.querySelectorAll('.icon > span');
//     let undoButton = document.getElementById('undoButton');
//     let contentContainer = document.getElementById('content');
    
//     let undoStack = [];

//     draggableSpans.forEach(function(span) {
//         span.ondragstart = function (e) {
//             e.dataTransfer.setData('text/plain', this.dataset.content);
//         };
//     });

//     document.addEventListener('dragover', function (e) {
//         if (e.target.closest('.dropzone')) {
//             e.preventDefault();
//             e.target.closest('.dropzone').classList.add('hover');
//         }
//     });

//     document.addEventListener('dragleave', function (e) {
//         if (e.target.closest('.dropzone')) {
//             e.target.closest('.dropzone').classList.remove('hover');
//         }
//     });

//     document.addEventListener('drop', function (e) {
//         let dropzone = e.target.closest('.dropzone');
//         if (dropzone) {
//             e.preventDefault();
//             dropzone.classList.remove('hover');

//             let contentToAdd = e.dataTransfer.getData('text/plain');

//             if (contentToAdd) {
//                 dropzone.insertAdjacentHTML('beforeend', contentToAdd);

//                 // Add the content and dropzone to the undo stack
//                 undoStack.push({ dropzone, content: contentToAdd });
//             } else {
//                 alert('Invalid content dropped.');
//             }
//         }
//     });

//     // Add event listeners to make elements draggable for reordering/moving
//     document.addEventListener('dragstart', function (e) {
//         if (e.target.classList.contains('icon')) {
//             e.dataTransfer.setData('text/plain', ''); // Clear the data
//             e.dataTransfer.effectAllowed = 'move';
//             e.target.classList.add('dragging');
//         }
//     });

//     document.addEventListener('dragend', function (e) {
//         if (e.target.classList.contains('icon')) {
//             e.target.classList.remove('dragging');
//         }
//     });

//     // Event listener for the 'Undo' button
//     undoButton.addEventListener('click', function () {
//         if (undoStack.length > 0) {
//             let undoAction = undoStack.pop();
//             undoAction.dropzone.removeChild(undoAction.dropzone.lastChild);
//         } else {
//             alert('No actions to undo.');
//         }
//     });
// });
