function unsplash_check_api() {
    const inputValue = document.getElementById("unsplash_input").value;
    console.log(inputValue);
    fetch(`https://api.unsplash.com/search/photos?query=""&client_id=${inputValue}`)
      .then(response => {
        console.log('unsplash response:', response);
        if (response.status === 401) {
          const unsplash_button = document.getElementById("unsplash_btn");
          unsplash_button.style.background = "red";
          unsplash_button.style.color = "white";
          unsplash_button.textContent = "API is invalid";
          localStorage.removeItem('unsplashApi');
        } else if (response.status === 200) {
          localStorage.setItem('unsplashApi', inputValue);
          const unsplash_button = document.getElementById("unsplash_btn");
          unsplash_button.style.background = "green";
          unsplash_button.style.color = "white";
          unsplash_button.textContent = "Unsplash activated!";
          return response.json();
        }
      })
      .then(data => {
        console.log('unsplash data:', data);
      })
      .catch(error => {
        console.error('unsplash error:', error.message);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const savedInputValue = localStorage.getItem('unsplashApi');
      if (savedInputValue) {
        const unsplash_input = document.getElementById("unsplash_input");
        const unsplash_button = document.getElementById("unsplash_btn");
        unsplash_input.value = savedInputValue;
        unsplash_button.style.background = "green";
        unsplash_button.style.color = "white";
        unsplash_button.textContent = "Unsplash activated!";
      }
    }, 100); // Adjust the delay as needed (in milliseconds)
  });