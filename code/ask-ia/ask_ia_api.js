const generate = async () => {
  // showPreloader();
  const openaiApi = localStorage.getItem('OPENAI_API_KEY');
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = openaiApi;
  const promptInput = document.getElementById("ia-imput-prompt");
  const generateBtn = document.getElementById("ia-button-generate");
  const stopBtn = document.getElementById("ia-button-stop");
  const codeElement = document.getElementById('code');  // El bloque que contiene el código actual

  // Obtener el código actual para enviárselo a la IA
  const code = codeElement.textContent;
  console.log("Código actual:", code);

  // Sanitizamos el código antes de enviarlo a la IA
  const sanitizedCode = code.replace(/[<>]/g, "");
  
  // Definir el contexto que enviaremos a la IA
  const roleFrontendDev = `
  1. You are an expert senior in frontend dev : JS, HTML, CCS, JSON.
  2. Read this code to understand better your answer: ${sanitizedCode}
  3. never add markdown or extra comments, just the CSS code.
  `;

  console.log("Contexto para la IA:", roleFrontendDev);
  let controller = null; // Store the AbortController instance

  // Alert the user if no prompt value
  if (!promptInput.value) {
    alert("Please enter a prompt.");
    return;
  }

  // Disable the generate button and enable the stop button
  generateBtn.disabled = true;
  stopBtn.disabled = false;

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
        model: "gpt-4o-mini",
        messages: [
          {
            role: 'system',
            content: roleFrontendDev
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

    // Limpiar el contenido anterior del codeElement antes de actualizarlo
    codeElement.textContent = "";  

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      // Procesar y parsear el chunk de datos
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

        // Actualizar directamente el contenido del codeElement con la respuesta de la IA
        if (content) {
          let cleanContent = content;

          // Verificar si comienza y termina con ```css y ``` y eliminarlos
          if (cleanContent.startsWith("```css")) {
            cleanContent = cleanContent.replace(/^```css/, "");
          }
          if (cleanContent.endsWith("```")) {
            cleanContent = cleanContent.replace(/```$/, "");
          }

          codeElement.textContent += cleanContent;  // Añade el contenido limpiado al codeElement
        }
      }
    }
  } catch (error) {
    // Manejar errores en la solicitud
    if (signal.aborted) {
      codeElement.textContent = "Request aborted.";
    } else {
      console.error("Error:", error);
      codeElement.textContent = "Error occurred while generating.";
    }
  } finally {
    generateBtn.disabled = false;
    stopBtn.disabled = true;
    controller = null; // Reset the AbortController instance

    // Aplicar highlight.js después de actualizar el contenido del código
    hljs.highlightElement(codeElement);  // Resalta el nuevo código generado
  }
};

