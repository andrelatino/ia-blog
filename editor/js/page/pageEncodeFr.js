// const observer0 = new MutationObserver(mutations => {
//     const gridDiv = document.getElementById("grid");
//     if (gridDiv) {
//         // Once the grid is found, observe its child nodes
//         observer0.disconnect();  // Disconnect the initial observer
//         decodeTextNodes(gridDiv);  // Decode existing text nodes first
//         const childObserver = new MutationObserver(childMutations => {
//             // For each mutation, check and decode the text nodes of 'grid'
//             decodeTextNodes(gridDiv);
//         });
//         childObserver.observe(gridDiv, { childList: true, subtree: true });
//     }
// });

// observer0.observe(document.body, { childList: true, subtree: true });

// function decodeTextNodes(element) {
//     const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
//     let node;
//     while(node = walk.nextNode()) {
//         const rawText = node.nodeValue;
//         const decodedText = decodeDoubleEscapedUnicode(rawText);
//         if (rawText !== decodedText) {  // Only update if there was a change
//             node.nodeValue = decodedText;
//             console.log(decodedText);
//         }
//     }
// }

// function decodeDoubleEscapedUnicode(str) {
//     // First handle the double backslashes for Unicode sequences
//     const singleEscaped = str.replace(/\\\\u([a-fA-F0-9]{4})/g, "\\u$1");
//     // Then decode the Unicode escape sequences
//     return singleEscaped.replace(/\\u([a-fA-F0-9]{4})/g, function(_, hex) {
//         return String.fromCharCode(parseInt(hex, 16));
//     });
// }
