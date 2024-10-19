  
const showServerName = document.getElementById('server-name');
showServerName.textContent = githubUser;

function github_get_sites() {
    // ?sort=committer-date&per_page=30&page=1
    fetch(`${githubRepoUrl}?sort=committer-date&per_page=20&page=1`, {
        headers: {
            'Authorization': `Bearer ${githubApi}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'If-None-Match': '' // Include this line to bypass caching           
        }
    })
    .then(response => {
        console.log('project list : ', response);
        return response.json();
    })
    .then(data => {
        // Filter repositories with the topic "ia-site"
        const iaSiteRepos = data.filter(repo => {
            return repo.topics.includes('ia-site');
        });

        var getTotal = iaSiteRepos.length;
        if (getTotal === undefined) {
            var showTotal = 0;  
        } else {
            var showTotal = getTotal;
        }

        addSubtitle = document.getElementById('grid');
        addSubtitle.className = 'sites-grid';
        addSubtitle.innerHTML= `
        <div class='sites-subtitle'>
            <p> Total : ${showTotal}</p>
            <button onclick="new_openmodal()" class="sites-add" ><img class="addIcon" src="../global/file/add.svg"></button>
        </div>`;
        const gridDiv = document.getElementById('grid');
        for (const api of iaSiteRepos) {

            var hasPages = api.has_pages;

            var urlEncoded = `https://${githubUser}.github.io/${api.name}`;

            if (hasPages === true) {
                hasPages = `<a href='https://${githubUser}.github.io/${api.name}'>${api.name}</a>`;
            } else {
                hasPages = "Non";
            }

            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'sites-items';
            itemsDiv.innerHTML = `
             <div class="sites-content">
                <div id="iframe-box">
                    <div class="thumbnail">
                        <iframe id="${api.id}" src="${urlEncoded}" frameborder="0" loading="lazy" scrolling="no"></iframe>
                    </div>
                </div>
                <div class="sites-cta">     
                    
                    <h2 class="sites-title">${api.name} </h2>
                    <p class="sites-created">Created on : ${new Date(api.created_at).toLocaleString('fr-FR')}</p>
                    <p class="sites-updated">Updated on : ${new Date(api.updated_at).toLocaleString('fr-FR')}</p>
                    <p class="sites-ID">ID : ${api.id} </p>
                    <p class="sites-link">Link : ${hasPages} </p>
                    <p class="sites-template">Template : ${api.is_template} </p>
                    <p class="sites-user">Server : ${api.owner.login} </p>
                    <p class="sites-type">Type : ${api.description} </p>
                    <p class="sites-tags">Tags : ${api.topics} </p>
                    <div class = "sites-buttons">
                        <button class="sites-domain" id="buttonSettings${api.id}">SETTINGS</button>
                        <button class="sites-edit" id="buttonEdit${api.id}">EDIT</button>
                        <button class="sites-delete" id="buttonDelete${api.id}"><img src="../global/file/delete-white.svg"></button>
                    </div>
                </div>
             </div>`;
        gridDiv.appendChild(itemsDiv);

        const buttonEdit = document.getElementById(`buttonEdit${api.id}`);
        const buttonDelete = document.getElementById(`buttonDelete${api.id}`);
        const buttonSettings = document.getElementById(`buttonSettings${api.id}`);

        buttonSettings.addEventListener('click', () => {
            localStorage.setItem('githubRepoName', api.name);
            const siteID = document.getElementById('siteID');
            siteID.textContent = api.id;
            const templateIs = document.getElementById('templateIs');
            templateIs.textContent = api.is_template;
            if (api.is_template === true ) {
                document.getElementById("checkbox-status").checked = true;
            } else if (api.is_template === false ) {
                document.getElementById("checkbox-status").checked = false;
            }
            const siteName = document.getElementById('siteName');
            siteName.textContent = api.name;
            const apiID = `${api.id}`;
            const apiIDText = document.querySelector('.flip-id');
            apiIDText.textContent = apiID;
            const apiUrl = `${api.name}`;
            const elementsWithApiUrlClass = document.querySelectorAll('.flip-url');
            elementsWithApiUrlClass.forEach(function(element) {
                element.textContent = apiUrl;
            });
            const showOverlay = document.querySelector('.overlay');
            showOverlay.style.visibility = "visible";
            showOverlay.style.display = "grid";
            openDiv('.card');
        });
                
        buttonEdit.addEventListener('click', () => {  
            localStorage.setItem('githubRepoName', api.name);
            localStorage.setItem ('Type', api.description);
            const values = [
                {
                    
                    "repo": api.name,
                    "id": api.id,
                    
                }
            ];
            console.log(values);
            const encoded = btoa(JSON.stringify(values));      
            const targetURL = '../directories?id=' + encoded;
            window.location.href = targetURL;
        });
        
        buttonDelete.addEventListener('click', () => {
            const showOverlay = document.querySelector('.overlay');
            showOverlay.style.visibility = "visible";
            showOverlay.style.display = "grid";
            const showDeleteBox = document.getElementById('deleteBox');
            showDeleteBox.style.visibility = 'visible';
            const getApiName = document.getElementById('siteName');
            getApiName.textContent = api.name;
        });
    }
        
})
.catch(error => {
    console.error('Error:', error);
});
}

github_get_sites();

function alertCheckboxStatus() {
    var checkbox = document.getElementById("checkbox-status");
    const templateIS = document.getElementById('templateIs');
    
    if (checkbox.checked) {
        templateIS.textContent = true;
    } else {
        templateIS.textContent = false;
    }
}

// Add an event listener to the checkbox to call the function when it changes

  
  // Add an event listener to the checkbox to call the function when it changes
  

// Crear una función para agregar elementos de paginación al contenedor
function addPaginationLinks(gridDiv, nextPageUrl, lastPageUrl) {
    // Crea elementos HTML para los enlaces de paginación
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';

    const nextLink = document.createElement('a');
    nextLink.href = nextPageUrl;  // Enlace a la siguiente página
    nextLink.textContent = 'Next';

    const lastLink = document.createElement('a');
    lastLink.href = lastPageUrl;  // Enlace a la última página
    lastLink.textContent = 'Last';

    // Agrega los enlaces al contenedor de paginación
    paginationDiv.appendChild(nextLink);
    paginationDiv.appendChild(lastLink);

    // Agrega el contenedor de paginación al contenedor principal
    gridDiv.appendChild(paginationDiv);
}




