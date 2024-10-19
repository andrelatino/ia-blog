const flipButtons = document.querySelectorAll('.flip-button');
flipButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const side = e.currentTarget.getAttribute('data-side').slice(-1);
    const card = document.querySelector('.card-inner');
    card.style.transform = `rotateY(180deg)`;
    document.querySelector('.card').setAttribute('data-show-back', `back${side}`);
  });
});

const backButtons = document.querySelectorAll('.back-to-front');
backButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = document.querySelector('.card-inner');
    card.style.transform = `rotateY(0deg)`;
  });
});

// document.getElementById('openButton').addEventListener('click', function() {
//     openDiv('.card');
// });
document.querySelectorAll('.closeButton').forEach(function(button) {
    button.addEventListener('click', function() {
        closeDiv('.card');
        closeDiv('.overlay');
        const card = document.querySelector('.card-inner');
        card.style.transform = `rotateY(0deg)`;

    });
});
