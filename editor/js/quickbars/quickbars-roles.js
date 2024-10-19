

// Clave de API (Reemplaza 'YOUR_OPENAI_API_KEY' con tu clave real)
const API_KEY = localStorage.getItem('openaiApi');


// Función para generar Crear HTML titles
export async function chatAssistant(text, html, id) {
    console.log('Iniciando htmlExpert con el texto:', text);
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    };

    // Create a new AbortController instance
    let controller = new AbortController();
    const signal = controller.signal;

    const body = {
        model: "gpt-4o",
        stream: true,
        messages: [
            { role: "system", content: `
            You are a chat assistant. Follow these guidelines exactly, in order:

            1. you are a chat assistant that help users in their language and will output your answer always in html format only
            2. Always Avoid using markdown formatting like \`\`\`html ... \`\`\` in your answer this is mandatory.
            3. Review all guidelines thoroughly before finalizing the content. Do not omit any instructions.
            `
            },
            { role: "user", content: text }
        ]
    };

    try {
        console.log('Enviando solicitud a la API con body:', body);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
            signal // Pass the signal to the fetch request
        });

        console.log('Respuesta recibida de la API, comenzando a leer el stream');
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        const resultTextElement = document.getElementById('resultText');
        const resultHTMLContainer = document.getElementById('resultHTML');
        resultTextElement.innerText = 'Procesando tu solicitud...';

        let resultContent = '';

        while (true) {
            const { done, value } = await reader.read();
            console.log('Leyendo chunk del stream, done:', done);
            if (done) {
                console.log('Stream terminado, contenido final:', resultContent);
                if (resultContent) {
                    resultTextElement.textContent = 'Generación completada con éxito.';
                    resultHTMLContainer.innerHTML = resultContent;
                } else {
                    resultTextElement.textContent = "No se generó contenido válido.";
                }
                break;
            }

            // Decode the chunk and split by lines
            const chunk = decoder.decode(value, { stream: true });
            console.log('Chunk decodificado:', chunk);
            const lines = chunk.split("\n");
            const parsedLines = lines
                .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
                .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
                .map((line) => {
                    try {
                        return JSON.parse(line);
                    } catch (e) {
                        console.error("Error parsing line: ", line, e);
                        return null;
                    }
                })
                .filter((line) => line !== null); // Filter out any lines that failed to parse

            console.log('Líneas parseadas:', parsedLines);
            for (const parsedLine of parsedLines) {
                const { choices } = parsedLine;
                if (choices && choices.length > 0) {
                    const { delta } = choices[0];
                    const { content } = delta;
                    // Update the resultContent with the new content in real-time
                    if (content) {
                        console.log('Actualizando contenido con:', content);
                        resultContent += content;
                        resultHTMLContainer.innerHTML = resultContent;
                    }
                }
            }
        }

    } catch (error) {
        console.error('Error durante la solicitud:', error);
        if (signal.aborted) {
            resultTextElement.textContent = "La solicitud fue cancelada.";
        } else {
            resultTextElement.textContent = "Lo siento, ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo.";
        }
    }
}

// // Función para generar Crear blogs
// export async function blogExpert(text) {
//     console.log('Iniciando blogExpert con el texto:', text);
//     const API_URL = 'https://api.openai.com/v1/chat/completions';
//     const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`
//     };

//     // Create a new AbortController instance
//     let controller = new AbortController();
//     const signal = controller.signal;

//     const body = {
//         model: "gpt-4o",
//         stream: true,
//         messages: [
//             {
//                 role: "system",
//                 content: 
// `
// Vous êtes un expert dans la création d'articles HTML optimisés pour le SEO. Suivez ces directives exactement, dans l'ordre :

// 1. Générez un article en utilisant uniquement du HTML sémantique, et évitez tout formatage markdown (par exemple, pas de \`\`\`html ... \`\`\`).
// 2. Créez un article optimisé pour les moteurs de recherche entre 1000 et 2000 mots
// 3. Structure le contenu le plus optimisé et pertinents pour le SEO, tant dans l'ecriture que dans le HTML.
// 4. Commencez l'article toujours avec cette structure html: 
//     <article>  
//         <div data-type="post-meta">
//             <h1 data-type = "post-title" > Titre principal </h1>
//             <p data-type = "post-date">Publié le : Date </p>
//             </div>   
//             <div data-type="post-cover">
//             <!-- N'ajoute rien ici, il sera remplit dynamiquement -->
//         </div>
//         <div data-type = "post-body">
//             <!-- Contenu du blog -->   
//             <div data-type="content">
//                 <!-- Ajoute un "Sommaire" le titre en <h2> et le contenu dans une balise <ol>. -->
//             <div>
//             <div data-type="content">
//                 <!-- Ajoute chaque Tematique du "Sommaire individualment" -->
//             <div>
//             <!-- Deploie chaque tematique du sommaire comme suit -->
//             <div data-type="content"><!-- Tematique 1 --><div>
//             <div data-type="content"><!-- Tematique 2 --><div>
//             <div data-type="content"><!-- Tematique 3 --><div>  
//             <!-- Avec autant de contenu selon la liste du "Sommaire" -->

//             <div data-type="content">
//                 <!-- Ajoute un "Resumée" -->
//             <div> 
            
//         </div>
//     </article>     
// 5. Relisez toutes les directives attentivement avant de finaliser le contenu. N'omettez aucune instruction.
// `

//             },
//             {
//                 role: "user",
//                 content: text
//             }
//         ]
//     };

//     try {
//         console.log('Enviando solicitud a la API con body:', body);
//         const response = await fetch(API_URL, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(body),
//             signal // Pass the signal to the fetch request
//         });

//         console.log('Respuesta recibida de la API, comenzando a leer el stream');
//         const reader = response.body.getReader();
//         const decoder = new TextDecoder('utf-8');
//         const resultTextElement = document.getElementById('resultText');
//         const resultHTMLContainer = document.getElementById('resultHTML');
//         resultTextElement.innerText = 'Blog Expert : working...';

//         let resultContent = '';

//         while (true) {
//             const { done, value } = await reader.read();
//             console.log('Leyendo chunk del stream, done:', done);
//             if (done) {
//                 console.log('Stream terminado, contenido final:', resultContent);
//                 if (resultContent) {
//                     console.log('Actualizando contenido HTML generado');
//                     resultHTMLContainer.innerHTML = resultContent;
//                     resultTextElement.textContent = 'Blog Expert : generando imagen...';

//                     console.log('Iniciando generación de imagen');
//                     // Generar la imagen basada en el texto del artículo
//                     const prompt = text;
//                     const style = `
//                     Créer une image dans le style croquis au crayon, basée sur : ${prompt}
//                     `;
//                     const finalPrompt = style;

//                     generateImage(finalPrompt).then(imageUrl => {
//                         console.log('Imagen generada con URL:', imageUrl);
//                         const postCoverDiv = resultHTMLContainer.querySelector('[data-type="post-cover"]');
//                         if (postCoverDiv) {
//                             console.log('Reemplazando contenido del div post-cover con la nueva imagen');
//                             postCoverDiv.innerHTML = `<img src="${imageUrl}" data-type="image-fg" loading="lazy">`;
//                         }

//                         setTimeout(() => {
//                             console.log('Esperando 5 segundos antes de actualizar el estado a terminado');
//                             resultTextElement.textContent = 'Blog Expert : contenido finalizado.';
//                             // Selecciona el botón por su ID
                                

//                                 // Simula el clic
//                                 const insertButton = document.getElementById("ai-insert-btn");
//                                 insertButton.click();

//                             // Agregar contenido generado al destino cuando la imagen esté lista
//                             console.log('Agregando contenido al div destino');
//                             const sourceDiv = document.getElementById('resultHTML');
//                             const contentToInsert = sourceDiv.innerHTML;
//                             const updatedContent = contentToInsert; // Eliminamos la llamada a addIdsToHtmlElements para evitar el error
//                             const targetDiv = document.getElementById(grid_content_id);
//                             targetDiv.insertAdjacentHTML('beforeend', updatedContent);
//                             closeIaModal(modalContainer);

//                             // Hacer clic en el botón para insertar el contenido
//                             console.log('Haciendo clic en el botón de inserción de contenido');
//                             document.getElementById('ai-insert-btn').click();
//                         }, 5000);
//                     }).catch(error => {
//                         console.error('Error al generar la imagen:', error);
//                         resultTextElement.textContent = "Lo siento, ocurrió un error al generar la imagen. Por favor intenta de nuevo.";
//                     });
//                 } else {
//                     resultTextElement.textContent = "No se generó contenido válido.";
//                 }
//                 break;
//             }

//             // Decode the chunk and split by lines
//             const chunk = decoder.decode(value, { stream: true });
//             console.log('Chunk decodificado:', chunk);
//             const lines = chunk.split("\n");
//             const parsedLines = lines
//                 .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
//                 .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
//                 .map((line) => {
//                     try {
//                         return JSON.parse(line);
//                     } catch (e) {
//                         console.error("Error parsing line: ", line, e);
//                         return null;
//                     }
//                 })
//                 .filter((line) => line !== null); // Filter out any lines that failed to parse

//             console.log('Líneas parseadas:', parsedLines);
//             for (const parsedLine of parsedLines) {
//                 const { choices } = parsedLine;
//                 if (choices && choices.length > 0) {
//                     const { delta } = choices[0];
//                     const { content } = delta;
//                     // Update the resultContent with the new content in real-time
//                     if (content) {
//                         console.log('Actualizando contenido con:', content);
//                         resultContent += content;
//                         resultHTMLContainer.innerHTML = resultContent;

//                         // Scroll hacia abajo automáticamente
//                         resultHTMLContainer.scrollTop = resultHTMLContainer.scrollHeight;
//                     }
//                 }
//             }
//         }

//     } catch (error) {
//         console.error('Error durante la solicitud:', error);
//         if (signal.aborted) {
//             resultTextElement.textContent = "La solicitud fue cancelada.";
//         } else {
//             resultTextElement.textContent = "Lo siento, ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo.";
//         }
//     }
// }

// Función para generar Crear blogs
export async function blogExpert(text) {
    console.log('Iniciando blogExpert con el texto:', text);
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    };

    // Create a new AbortController instance
    let controller = new AbortController();
    const signal = controller.signal;

    const body = {
        model: "gpt-4o",
        stream: true,
        messages: [
            {
                role: "system",
                content: 
`
Vous êtes un expert dans la création d'articles HTML optimisés pour le SEO. Suivez ces directives exactement, dans l'ordre :

1. Générez un article en utilisant uniquement du HTML sémantique, et évitez tout formatage markdown (par exemple, pas de \`\`\`html ... \`\`\`).
2. Créez un article optimisé pour les moteurs de recherche entre 1000 et 2000 mots
3. Structure le contenu le plus optimisé et pertinents pour le SEO, tant dans l'ecriture que dans le HTML.
4. Commencez l'article toujours avec cette structure html: 
    <article>  
        <div data-type="post-meta">
            <h1 data-type = "post-title" > Titre principal </h1>
            <p data-type = "post-date">Publié le : Date </p>
            </div>   
            <div data-type="post-cover">
            <!-- N'ajoute rien ici, il sera remplit dynamiquement -->
        </div>
        <div data-type = "post-body">
            <!-- Contenu du blog -->   
            <div data-type="content">
                <!-- Ajoute un "Sommaire" le titre en <h2> et le contenu dans une balise <ol>. -->
            <div>
            <div data-type="content">
                <!-- Ajoute chaque Tematique du "Sommaire individualment" -->
            <div>
            <!-- Deploie chaque tematique du sommaire comme suit -->
            <div data-type="content"><!-- Tematique 1 --><div>
            <div data-type="content"><!-- Tematique 2 --><div>
            <div data-type="content"><!-- Tematique 3 --><div>  
            <!-- Avec autant de contenu selon la liste du "Sommaire" -->

            <div data-type="content">
                <!-- Ajoute un "Resumée" -->
            <div> 
            
        </div>
    </article>     
5. Relisez toutes les directives attentivement avant de finaliser le contenu. N'omettez aucune instruction.
`

            },
            {
                role: "user",
                content: text
            }
        ]
    };

    try {
        console.log('Enviando solicitud a la API con body:', body);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
            signal // Pass the signal to the fetch request
        });

        console.log('Respuesta recibida de la API, comenzando a leer el stream');
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        // const resultTextElement = document.getElementById('resultText');
        // resultTextElement.innerText = 'Blog Expert : working...';
        const resultHTMLContainer = document.getElementById('grid-body');
        

        let resultContent = '';

        while (true) {
            const { done, value } = await reader.read();
            console.log('Leyendo chunk del stream, done:', done);
            if (done) {
                console.log('Stream terminado, contenido final:', resultContent);
                if (resultContent) {
                    console.log('Actualizando contenido HTML generado');
                    resultHTMLContainer.innerHTML = resultContent;
                    // resultTextElement.textContent = 'Blog Expert : generando imagen...';

                    console.log('Iniciando generación de imagen');
                    // Generar la imagen basada en el texto del artículo
                    const prompt = text;
                    const style = `
                    Créer une image dans le style croquis au crayon, basée sur : ${prompt}
                    `;
                    const finalPrompt = style;

                    generateImage(finalPrompt).then(imageUrl => {
                        console.log('Imagen generada con URL:', imageUrl);
                        const postCoverDiv = resultHTMLContainer.querySelector('[data-type="post-cover"]');
                        if (postCoverDiv) {
                            console.log('Reemplazando contenido del div post-cover con la nueva imagen');
                            postCoverDiv.innerHTML = `<img src="${imageUrl}" data-type="image-fg" loading="lazy">`;
                        }

                        setTimeout(() => {
                            console.log('Esperando 5 segundos antes de actualizar el estado a terminado');
                            // resultTextElement.textContent = 'Blog Expert : contenido finalizado.';
                            // Selecciona el botón por su ID
                                

                                // Simula el clic
                                const insertButton = document.getElementById("ai-insert-btn");
                                insertButton.click();

                            // Agregar contenido generado al destino cuando la imagen esté lista
                            console.log('Agregando contenido al div destino');
                            const sourceDiv = document.getElementById('resultHTML');
                            const contentToInsert = sourceDiv.innerHTML;
                            const updatedContent = contentToInsert; // Eliminamos la llamada a addIdsToHtmlElements para evitar el error
                            const targetDiv = document.getElementById(grid_content_id);
                            targetDiv.insertAdjacentHTML('beforeend', updatedContent);
                            closeIaModal(modalContainer);

                            // Hacer clic en el botón para insertar el contenido
                            console.log('Haciendo clic en el botón de inserción de contenido');
                            document.getElementById('ai-insert-btn').click();
                        }, 5000);
                    }).catch(error => {
                        console.error('Error al generar la imagen:', error);
                        // resultTextElement.textContent = "Lo siento, ocurrió un error al generar la imagen. Por favor intenta de nuevo.";
                    });
                } else {
                    // resultTextElement.textContent = "No se generó contenido válido.";
                }
                break;
            }

            // Decode the chunk and split by lines
            const chunk = decoder.decode(value, { stream: true });
            console.log('Chunk decodificado:', chunk);
            const lines = chunk.split("\n");
            const parsedLines = lines
                .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
                .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
                .map((line) => {
                    try {
                        return JSON.parse(line);
                    } catch (e) {
                        console.error("Error parsing line: ", line, e);
                        return null;
                    }
                })
                .filter((line) => line !== null); // Filter out any lines that failed to parse

            console.log('Líneas parseadas:', parsedLines);
            for (const parsedLine of parsedLines) {
                const { choices } = parsedLine;
                if (choices && choices.length > 0) {
                    const { delta } = choices[0];
                    const { content } = delta;
                    // Update the resultContent with the new content in real-time
                    if (content) {
                        console.log('Actualizando contenido con:', content);
                        resultContent += content;
                        resultHTMLContainer.innerHTML = resultContent;

                        // Scroll hacia abajo automáticamente
                        resultHTMLContainer.scrollTop = resultHTMLContainer.scrollHeight;
                    }
                }
            }
        }

    } catch (error) {
        console.error('Error durante la solicitud:', error);
        if (signal.aborted) {
            resultTextElement.textContent = "La solicitud fue cancelada.";
        } else {
            resultTextElement.textContent = "Lo siento, ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo.";
        }
    }
}

// Función para generar una imagen
async function generateImage(finalPrompt) {
    console.log('Enviando solicitud para generar imagen con prompt:', finalPrompt);
    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: finalPrompt,
            model: 'dall-e-3',
            n: 1,
            size: '1792x1024',
            response_format: 'url'
        })
    });

    if (!response.ok) {
        console.error('Error al solicitar generación de imagen:', response.status);
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Respuesta recibida para la generación de imagen:', data);
    return data.data[0].url;
}

