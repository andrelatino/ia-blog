function showPreloader() {
    document.getElementById('preloaderModal').style.display = 'flex';
    document.getElementById('apiPreloader').style.display = 'block';
    document.querySelector('.checkmark').style.display = 'none'; // Hide checkmark
}
function hidePreloader() {
    var modal = document.getElementById('preloaderModal');
    modal.classList.add('fade-out'); // Start fade-out animation

    // Wait for the animation to complete before setting display to 'none'
    setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('fade-out'); // Reset for next time

        // Also hide success and failure animations
        document.querySelector('.success-animation').style.display = 'none';
        document.querySelector('.failure-animation').style.display = 'none';
    }, 500); // This duration should match the animation duration
}
function showSuccess() {
    document.getElementById('apiPreloader').style.display = 'none'; // Hide spinner
    let checkmark = document.querySelector('.checkmark');
    checkmark.style.display = 'block'; // Show checkmark animation
    setTimeout(hidePreloader, 1500); // Hide after 2 seconds
}
function showFailure() {
    document.getElementById('apiPreloader').style.display = 'none'; // Hide spinner
    let crossmark = document.querySelector('.failure-animation');
    crossmark.style.display = 'block'; // Show cross animation
    setTimeout(hidePreloader, 2500); // Hide after 2.5 seconds to allow for full animation
}