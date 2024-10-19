const new_flipButtons = document.querySelectorAll('.new_flip-button');
new_flipButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const new_side = e.currentTarget.getAttribute('data-side').slice(-1);
    const new_card = document.querySelector('.new_card-inner');
    new_card.style.transform = `rotateY(180deg)`;
    document.querySelector('.new_card').setAttribute('data-show-back', `new_back${new_side}`);
  });
});

// Aquí es donde necesitas hacer el cambio, usa new_backButtons en lugar de backButtons
const new_backButtons = document.querySelectorAll('.new_back-to-front');
new_backButtons.forEach(button => { // Cambio hecho aquí
  button.addEventListener('click', () => {
    const new_card = document.querySelector('.new_card-inner');
    new_card.style.transform = `rotateY(0deg)`;
  });
});

document.querySelectorAll('.new_toolbar-close').forEach(function(button) {
    button.addEventListener('click', function() {
        new_closemodal();
        const new_card = document.querySelector('.new_card-inner');
        new_card.style.transform = `rotateY(0deg)`;

    });
});

function new_openmodal() {
  const modalNewOverlay = document.getElementById("modalNewOverlay");
  const modalContent = document.getElementById("new_flipcard");
  modalNewOverlay.style.visibility = "visible";
  modalContent.style.visibility = "visible";
}
function new_closemodal() {
  const modalNewOverlay = document.getElementById("modalNewOverlay");
  const modalContent = document.getElementById("new_flipcard");
  modalNewOverlay.style.visibility = "hidden";
  modalContent.style.visibility = "hidden";
}
