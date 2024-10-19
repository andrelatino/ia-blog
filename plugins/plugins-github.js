  function github_check_api() {
        
    const inputValue = document.getElementById("github_input").value;
    const accessToken = inputValue;

    fetch('https://api.github.com/user', {
    headers: {
        Authorization: `bearer ${accessToken}`
    }
    })
    .then(response => {
        console.log('github response:', response);

        if (response.status === 401) {
            const github_button = document.getElementById("github_btn");
            github_button.style.background = "red";
            github_button.style.color = "white";
            github_button.textContent = "API is invalid";
        } else if (response.status === 200) {
            localStorage.setItem('githubApi',inputValue );
            
            const github_button = document.getElementById("github_btn");
            github_button.style.background = "green";
            github_button.style.color = "white";
            github_button.textContent = "Github activated!";
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });

}
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   setTimeout(() => {
  //     const savedInputValue = localStorage.getItem('githubApi');
  //     if (savedInputValue) {
  //       const github_input = document.getElementById("github_input");
  //       const github_button = document.getElementById("github_btn");
  //       github_input.value = savedInputValue;
  //       github_button.style.background = "green";
  //       github_button.style.color = "white";
  //       github_button.textContent = "Github activated!";
  //     }
  //   }, 100); // Adjust the delay as needed (in milliseconds)
  // });

 