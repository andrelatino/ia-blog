let initialRatio = null;

function isValidValue(value) {
    return !isNaN(value) && value > 0;
}

function initialize() {
    const widthInput = document.getElementById("widthInput");
    const heightInput = document.getElementById("heightInput");

    // Usar los valores de los inputs actuales como referencia
    const referenceWidth = parseFloat(widthInput.value.replace(",", "."));
    const referenceHeight = parseFloat(heightInput.value.replace(",", "."));

    if (isValidValue(referenceWidth) && isValidValue(referenceHeight)) {
        initialRatio = referenceWidth / referenceHeight;
    }

    updateValues();
}

function updateValues() {
    const sizeWidthInput = document.getElementById("sizeWidthInput");
    const sizeHeightInput = document.getElementById("sizeHeightInput");

    const width = parseFloat(sizeWidthInput.value.replace(",", "."));
    const height = parseFloat(sizeHeightInput.value.replace(",", "."));

    if (document.activeElement === sizeWidthInput) {
        sizeHeightInput.value = isValidValue(width) ? Math.round(width / initialRatio) : "";
    } else if (document.activeElement === sizeHeightInput) {
        sizeWidthInput.value = isValidValue(height) ? Math.round(height * initialRatio) : "";
    }
}

const sizeWidthInput = document.getElementById("sizeWidthInput");
const sizeHeightInput = document.getElementById("sizeHeightInput");
sizeWidthInput.addEventListener("input", function() {
    setTimeout(updateValues, 0);
});
sizeHeightInput.addEventListener("input", function() {
    setTimeout(updateValues, 0);
});

initialize();
