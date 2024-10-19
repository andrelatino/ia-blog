


const openaiApi = localStorage.getItem('openaiApi');

const generate = async () => {
  showPreloader();
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = localStorage.getItem(openaiApi);
  const promptInput = document.getElementById("ia-imput-prompt");
  const generateBtn = document.getElementById("ia-button-generate");
  const stopBtn = document.getElementById("ia-button-stop");
  const resultText = document.getElementById("ia-p-result");
  const sectionHtml =  localStorage.getItem('sectionHtml');
  const roleFrontendDev =`
  Always respect the following instructions by order :
  1. You are an expert in creating sections using HTML, CSS, and JavaScript. You will always provide HTML code using only semantic HTML.
  2. Never include any extra content in your answer besides semantic HTML.
  3. Always check the current code of this section before responding to better understand my question: ${sectionHtml}.
  4. Always start your answer with the tag <section id="{sectionID}" data-type="section"> and end with the closing </section> tag.
  5. Only add or make changes in HTML within the <div id="{htmlID}" data-type="html"> element; this is mandatory.
  6. Only add or make changes in CSS within the <style id="{styleID}" type="text/css" data-type="css"> element; this is mandatory.
  7. Never use CSS default values like: body, h1, p ... use only the HTML IDs.
  9. Each new html added must have 7 exact characters like "aDiARrx" only uppercase and lowercase letters are allowed.
  10. using only uppercase and lowercase letters. Never change existing IDs.
  `
console.log (roleFrontendDev);
let controller = null; // Store the AbortController instance

    // Alert the user if no prompt value
    if (!promptInput.value) {
      alert("Please enter a prompt.");
      return;
    }

  // Disable the generate button and enable the stop button
  generateBtn.disabled = true;
  stopBtn.disabled = false;
  resultText.innerText = "Generating...";

  // Create a new AbortController instance
  controller = new AbortController();
  const signal = controller.signal;

  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
    
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-0125",
          // messages: [{ role: "user", content: promptInput.value }],
          messages: [
            {
              role: 'system',
              content: `${roleFrontendDev}`
            },
            {
              role: 'user',
              content: promptInput.value
            }
          ],
          max_tokens: 3777,
          stream: true, // For streaming responses
        }),
        signal, // Pass the signal to the fetch request
      });

    // Read the response as a stream of data
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    resultText.innerText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");
      const parsedLines = lines
        .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
        .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
        .map((line) => JSON.parse(line)); // Parse the JSON string

      for (const parsedLine of parsedLines) {
        const { choices } = parsedLine;
        const { delta } = choices[0];
        const { content } = delta;
        // Update the UI with the new content
        if (content) {
          resultText.innerText += content;
        }
      }
    }
  } catch (error) {
    // Handle fetch request errors
    if (signal.aborted) {
      resultText.innerText = "Request aborted.";
    } else {
      showFailure();
      console.error("Error:", error);
      resultText.innerText = "Error occurred while generating.";
    }
  } finally {
    showSuccess();
    // const sectionHtml =  localStorage.getItem('sectionHtml');
    const sectionID =  document.getElementById ('toolbarSectionID').textContent;
    // Enable the generate button and disable the stop button
    generateBtn.disabled = false;
    stopBtn.disabled = true;
    controller = null; // Reset the AbortController instance
    ia_update(sectionID, resultText.innerText);
    // alert('done');
    // alert('sectionID:'+ sectionID);
    // alert('sectionHtml:'+ resultText.innerText);
  }
};

function ia_update(id, html) {
  const elemento = document.getElementById(id);
  if (elemento) {
    // Actualiza solo el contenido interno del elemento, no el elemento mismo
    elemento.outerHTML = html;
    console.log('Contenido actualizado con éxito.');
    localStorage.setItem('sectionHtml', html);
  } else {
    console.error('El elemento con el ID ' + id + ' no se encontró.');
  }
}

// const stop = () => {
//   // Abort the fetch request by calling abort() on the AbortController instance
//   if (controller) {
//     controller.abort();
//     controller = null;
//   }
// };

// promptInput.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     generate();
//   }
// });
// generateBtn.addEventListener("click", generate);
// stopBtn.addEventListener("click", stop);