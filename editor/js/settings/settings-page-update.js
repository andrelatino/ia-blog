var pageSettings;
var settingsUpdated;

async function pageSettingsLoad(owner, repo, path, token) {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            const downloadUrl = data.download_url;

            const downloadResponse = await fetch(downloadUrl);
            if (downloadResponse.ok) {
                const content = await downloadResponse.text();

                // Si el contenido es JSON, conviértelo a un objeto JavaScript
                try {
                    var jsonSettings = JSON.parse(content);
                    
                    var typeOfMyVar = typeof jsonSettings;
                    console.log('jsonSettings: ' + typeOfMyVar); // This will output "object"
                    console.log('json Settings Load:', jsonSettings);
                    // Convert the JSON object to a string before storing it in localStorage
                    var settingsInitial = localStorage.setItem('settingsInitial', JSON.stringify(jsonSettings));
                    var pageSettings = localStorage.setItem('pageSettings', JSON.stringify(jsonSettings));

                    pageScriptsLoad(githubUser, githubRepoName, '', githubApi);
                } catch (e) {
                    console.error('Error al parsear JSON:', e);
                }
            } else {
                console.error(`Error al descargar el archivo: ${downloadResponse.status}`);
            }
        } else {
            console.error(`Error en la respuesta de la API de GitHub: ${response.status}`);
        }
    } catch (error) {
        console.error('ERROR', error);
    }
}

pageSettingsLoad(githubUser, githubRepoName, 'settings.json', githubApi)
