function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function addIdToElement(element) {
    if (!element.id) {
        // Generate a unique 'id'
        var uniqueId = generateRandomID(7); // Using a timestamp for uniqueness
        
        // Add the 'id' attribute at the beginning of the element's attributes
        var attributes = element.attributes;
        var idAttribute = document.createAttribute('id');
        idAttribute.value = uniqueId;
        
        if (attributes.length > 0) {
            element.setAttributeNode(idAttribute);
            element.setAttribute(idAttribute.name, idAttribute.value); // Ensure the ID is at the beginning
        } else {
            element.setAttributeNode(idAttribute);
        }
    }
}

// Function to be called when mutations are observed
function handleMutations(mutationsList) {
    for (var mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // New nodes have been added to the 'grid' div
            for (var addedNode of mutation.addedNodes) {
                if (addedNode.nodeType === Node.ELEMENT_NODE) {
                    // Check if it's an element node
                    addIdToElement(addedNode);
                }
            }
        }
    }
}

// Target the 'grid' div
var target = document.getElementById('grid');
// Create a MutationObserver
var observer = new MutationObserver(handleMutations);
// Configure the observer to watch for changes to the child nodes (subtree)
var config = { childList: true, subtree: true };
// Start observing the target node for mutations
observer.observe(target, config);
