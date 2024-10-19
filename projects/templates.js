
async function convertToTemplate() {
    const owner = localStorage.getItem('githubUser');;
    const repoTemplate = localStorage.getItem('githubRepoName');
    const token = localStorage.getItem('githubApi');
    const statusText = document.getElementById('templateIs').textContent;
    const isTemplate = statusText.trim().toLowerCase() === 'true';
    const message = document.getElementById('templateMessage');

    console.log('Iniciando la actualización del repositorio...');
    message.textContent = "1/3 Updating..."; 

    console.log (owner, repoTemplate, token, statusText);

    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoTemplate}?t=${Date.now()}`, { // Adding a cache-busting parameter
            method: 'PATCH',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.baptiste-preview+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ is_template: isTemplate })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Repositorio actualizado con éxito:', data);

        // Update the message after the API request is done
        message.textContent = "2/3 Updated!";

        setTimeout(() => {
            message.textContent = "3/3 Reloading...";
            // Descomentar la siguiente línea para recargar la página
            // location.reload(true);
        }, 2000);

        setTimeout(() => {
            location.reload(true);
        }, 4000);

    } catch (error) {
        message.textContent = "Error updating";
        console.error('Error al convertir el repositorio a plantilla:', error);
    }
}


// Your GitHub username and personal access token
const username = localStorage.getItem('githubUser');
const token = localStorage.getItem('githubApi');
async function getTemplateRepositories() {
    try {
      const response = await fetch('https://api.github.com/user/repos?type=owner', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${token}`)}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const repositories = await response.json();
  
      // Filter repositories that are templates
      const templateRepositories = repositories.filter(repo => repo.is_template);
  
      // Get the select element
      const selectElement = document.getElementById('templateSelector');
  
      // Clear any existing options
      selectElement.innerHTML = '';
  
      // Call the function to populate the select element

      // Create and add an option for each template repository
      templateRepositories.forEach(repo => {
        const optionElement = document.createElement('option');
        optionElement.value = repo.name;
        optionElement.textContent = repo.name;
        selectElement.appendChild(optionElement);
      });
  
      return templateRepositories;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }
  
  // Usage example
  getTemplateRepositories()
    .then(repositories => {
      console.log('Template Repositories:', repositories);
      populateTemplateSelect();
    })
    .catch(error => {
      console.error('Error:', error);
    });




// Create a function to populate the select element with template repositories
async function populateTemplateSelect() {
    try {
        // Get the template repositories using the provided async function
        const templateRepositories = await getTemplateRepositories();

        // Get the select element
        const selectElement = document.getElementById('templateSelector');

        // Clear any existing options
        selectElement.innerHTML = '';

        // Create a default option element with an empty value and set its text content
        const defaultOption = document.createElement('option');
        defaultOption.value = 'Select template'; // You can set this to an empty value or any other appropriate value
        defaultOption.textContent = 'Select template'; // Set the text content
        selectElement.appendChild(defaultOption);

        // Set the default value if it exists in the options


        // Create and add an option for each template repository
        templateRepositories.forEach(repo => {
            const optionElement = document.createElement('option');
            optionElement.value = repo.name;
            optionElement.textContent = repo.name;
            selectElement.appendChild(optionElement);
        });

        // Set a default value if it exists
        const defaultValue = "Select template"; // Replace with your actual default value
        let defaultValueExists = templateRepositories.some(repo => repo.name === defaultValue);

        if (defaultValueExists) {
            selectElement.value = defaultValue;
        } else {
            defaultOption.selected = true;
        }
            } catch (error) {
                console.error('Error fetching and populating template repositories:', error);
            }
        }

// Call the function to populate the select element
// populateTemplateSelect();


