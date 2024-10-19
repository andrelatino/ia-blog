function pexels_check_api() {
       
    const inputValue = document.getElementById("pexels_input").value;
    const accessToken = inputValue;
    videoQuery = "cat";
    videoPage = 1;
    videoPerPage = 1;
  fetch(`https://api.pexels.com/videos/search?query=${videoQuery}&page=${videoPage}&per_page=${videoPerPage}`, {
    headers: {
        Authorization: accessToken
    }
  })
    .then(response => {
        console.log('pexels response:', response);
        if (response.status === 200) {
            localStorage.setItem('pexelsApi',inputValue );
            const pexels_button = document.getElementById("pexels_btn");
            pexels_button.style.background = "green";
            pexels_button.style.color = "white";
            pexels_button.textContent = "Pexels activated!";
            return response.json();
        } else{
            const pexels_button = document.getElementById("pexels_btn");
            pexels_button.style.background = "red";
            pexels_button.style.color = "white";
            pexels_button.textContent = "API is invalid";
        }
    })
    .then(data => {
        console.log(data);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
        const pexels_button = document.getElementById("pexels_btn");
        pexels_button.style.background = "red";
        pexels_button.style.color = "white";
        pexels_button.textContent = "API is invalid";
    });
}

    document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const savedInputValue = localStorage.getItem('pexelsApi');
      if (savedInputValue) {
        const pexels_input = document.getElementById("pexels_input");
        const pexels_button = document.getElementById("pexels_btn");
        pexels_input.value = savedInputValue;
        pexels_button.style.background = "green";
        pexels_button.style.color = "white";
        pexels_button.textContent = "Pexels activated!";
      }
    }, 100); // Adjust the delay as needed (in milliseconds)
  });