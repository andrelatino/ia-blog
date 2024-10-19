

    //CHATGPT
    function openai_check_api() {
      var openai_input = document.getElementById("openai_input");
      var openai_button = document.getElementById("openai_btn");
      var openai_value = openai_input.value;
      var openai_api = openai_value;
      var openai_bearer = "Bearer "+openai_api;
  
      openai_button.style.background = "blue";
      openai_button.style.color = "white";
      openai_button.textContent = "Checking API...";
  
      fetch("https://api.openai.com/v1/chat/completions", {
          method: 'POST',
          headers: {
              'Authorization': openai_bearer,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: 'system',
                content: 'assistant'
              },
              {
                role: 'user',
                content: 'hi'
              }
            ]
          })
      })
      .then(response => {
          console.log('openai response:', response);
  
          if (response.status === 401) {
              openai_button.style.background = "red";
              openai_button.style.color = "white";
              openai_button.textContent = "API is invalid";
          } else if (response.status === 200) {
              localStorage.setItem('openaiApi', openai_api);
              openai_button.style.background = "green";
              openai_button.style.color = "white";
              openai_button.textContent = "API is correct!";
              return response.json();
          }
      })
      .then(data => {
          console.log('openai data:', data);
      })
      .catch(error => {
          console.error('openai error:', error.message);
      });
  
  }
  // var openai_button = document.getElementById("openai_btn");
  // openai_button.addEventListener("click", openai_check_api);

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const savedInputValue = localStorage.getItem('openaiApi');
      if (savedInputValue) {
        const openai_input = document.getElementById("openai_input");
        const openai_button = document.getElementById("openai_btn");
        openai_input.value = savedInputValue;
        openai_button.style.background = "green";
        openai_button.style.color = "white";
        openai_button.textContent = "Openai activated!";
      }
    }, 100); // Adjust the delay as needed (in milliseconds)
  });