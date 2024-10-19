function closeDiv(selector) {
    const divToClose = document.querySelector(selector);
    if (divToClose) {
        divToClose.style.display = 'none';
    }
}
// Ejemplo de uso:
// closeDiv('.card');
// closeDiv('#someDivId');

function openDiv(selector) {
    const divToOpen = document.querySelector(selector);
    if (divToOpen) {
        divToOpen.style.display = 'block';
    }
}



