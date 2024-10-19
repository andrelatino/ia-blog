
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const encodedValue = getUrlParameter('id');
const decodedValues = JSON.parse(atob(encodedValue));

for (const item of decodedValues) {
    var repo = item.repo;
    var id = item.id;
    var is = item.is;
    
    console.log('BASE64 LOAD-------------------');
    console.log('repo:', repo);
    console.log('id:', id);
    console.log('is:', is);
    console.log('BASE64 LOAD-------------------');
    var repoName = item.repo;
    localStorage.setItem('githubRepoName', item.repo); 
    localStorage.setItem('githubRepoId', item.id); 
    
    var pageTitle = document.getElementById('admin-title-text');
    var pageBreadCrumb = document.getElementById('admin-bread-crumb');

}
function loadDirectories() {
    const baseURL = 'https://api.github.com/repos';
    const owner = githubUser;
    const repo = repoName;
    const url = `${baseURL}/${owner}/${repo}/contents`;
    const headers = new Headers({
    'Authorization': `Bearer ${githubApi}`,
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'If-None-Match': '' // Include this line to bypass caching   
    });
    fetch(url, { headers })
    .then(response => response.json())
    .then(data => {

        const showData = pageIs(data);
        console.log('pageIs: '+showData);
        localStorage.setItem('pageIs',showData);
        //GET SHA AND URL  FROM INDEX.JSON
        const indexFile = data.find(api => api.name === "index.json");
        const indexFileSha = indexFile ? indexFile.sha : null;
        const indexFileUrl = indexFile ? indexFile.url : null;
        console.log("SHA de index.json:", indexFileSha);

        const settingsFile = data.find(api => api.name === "settings.json");
        const settingsFileSha = settingsFile ? settingsFile.sha : null;
        const settingsFileUrl = settingsFile ? settingsFile.url : null;
        console.log("SHA de settings.json:", settingsFileSha);
        //------------------------------------------------

        localStorage.setItem('pageSha',indexFileSha);
        localStorage.setItem('pageUrl',indexFileUrl);
        localStorage.setItem('settingsSha',settingsFileSha);
        localStorage.setItem('settingsUrl',settingsFileUrl);


        pageTitle.textContent = repoName;
        pageBreadCrumb.textContent = 'sites / ' + repoName;

        console.log(data);
        
        // const filesToExclude = [];
        const filesToExclude = [".home","README.md","settings.json","index.json"];
        const filteredData = data.filter(api => !filesToExclude.includes(api.name));

        getTotal = filteredData.length;

        if (getTotal === undefined) {
            var showTotal = 0;  
        } else {
            var showTotal = getTotal;
        }
        addSubtitle = document.getElementById('grid');
        addSubtitle.className = 'directories-grid';
        addSubtitle.innerHTML= `
        <div class='directories-subtitle'>
            <p> Total : ${showTotal}</p>
            <a class="directories-add" onclick="directoriesModalOpen();"><img class="addIcon" src="../global/file/add.svg"></a>
        </div>`;
        const gridDiv = document.getElementById('grid');
        for (const api of filteredData) {
            

            const itemsDiv = document.createElement('div');
            
            itemsDiv.className = 'directories-items';
            itemsDiv.innerHTML = `
            <div class="directories-content"> 
                <h2 class="directories-txt">${api.name}</h2>
                <p class="directories-txt">Project: ${repoName}</p>
                <p class="directories-type">Type: ${api.type}</p>             
            </div>
            `;

            if (api.name === "index.json") {
                console.log('index.json existe');
                console.log('api.url: '+api.url);  
                var pageUrl = api.url;
                var pageSha = api.sha;
                
            }
            

            if (api.name.includes("index-")) {

                // var devJsonName = api.name;
                var devJsonRaw = api.download_url;                           
                var devJsonApi = api.url;
                var devJsonSha = api.sha;
            }

            if (api.name !== 'index.html' && api.type === 'file') {
                // Create and append the delete button
                const addButton = document.createElement('a');
                addButton.className = "directories-add";
                addButton.innerHTML = '<button class="directories-edit">EDIT</button>';
                itemsDiv.appendChild(addButton);
                addButton.addEventListener('click', function() {
                    //SET DEFAULT LOCALSTORAGE VALUES
                    localStorage.setItem('codeSha',api.sha);
                    localStorage.setItem('codeUrl',api.url);
                    // alert(api.name);
                    const values = 
                    [
                        {
                            
                            "fileUrl":api.download_url,
                            "fileName":repoName,
                            "fileType":api.name,
                            "fileSha":api.sha,
                            "fileToUpdate":api.url,                       
                            
                        }
                    ];
                    console.log(values);
                    const encoded = btoa(JSON.stringify(values));
                    const targetURL = '../code?id=' + encoded;
                    window.location.href = targetURL;
                });

                const deleteButton = createDeleteButton();
                deleteButton.addEventListener('click', function() {
                    deleteItem(api.sha,api.path,repoName);    
                });
                itemsDiv.appendChild(deleteButton);
            }
    
            if (api.name === 'index.html' && api.type === 'file') {
                const buttonsCta = document.createElement('div');
                buttonsCta.className = 'buttons-cta';
            
                const editButton = document.createElement('a');
                editButton.className = 'edit-a';
                editButton.innerHTML = '<button class="edit-button">EDIT</button>';
                editButton.addEventListener('click', function() {
                    // Set default localStorage values and other code for the "EDIT" button here
                    
                    const values = [
                        {
                            "pageIs": showData,
                            "indexHtmlRaw": api.download_url,
                            "indexHtmlApi": api.url,
                            "indexHtmlSha": api.sha,
                            "indexHtmlPath": api.path,
                            "repoName": repoName,
                            "devJsonRaw": devJsonRaw,
                            "devJsonApi": devJsonApi,
                            "devJsonSha": devJsonSha,
                            "base": `https://${githubUser}.github.io/${repoName}`
                        }
                    ];
                    const encoded = btoa(JSON.stringify(values));
                    console.log(values);
                    const targetURL = '../editor?id=' + encoded;
                    window.location.href = targetURL;
                });
            
                const codeButton = document.createElement('a');
                codeButton.className = 'code-a';
                codeButton.innerHTML = '<button class="code-button">CODE</button>';
                codeButton.addEventListener('click', function() {
                    // Set default localStorage values and other code for the "CODE" button here
                    localStorage.setItem('codeSha', api.sha);
                    localStorage.setItem('codeUrl', api.url);
                    const values = [
                        {
                            "fileUrl": api.download_url,
                            "fileName": repoName,
                            "fileType": api.name,
                            "fileSha": api.sha,
                            "fileToUpdate": api.url
                        }
                    ];
                    console.log(values);
                    const encoded = btoa(JSON.stringify(values));
                    const targetURL = '../code?id=' + encoded;
                    window.location.href = targetURL;
                });
            
                buttonsCta.appendChild(editButton);
                buttonsCta.appendChild(codeButton);
            
                itemsDiv.appendChild(buttonsCta);
            }
            

            if (api.type === 'dir') {
                const dirButton = document.createElement('a');
                dirButton.className = "dir-button";
                dirButton.innerHTML = '<button class="dir-button">OPEN</button>';
                dirButton.addEventListener('click', function(){
                    // alert(api.name);
                    const values = 
                    [
                        {
                            "repo":githubRepoName,
                            "user":githubUser,
                            "dir":api.name,
                            "base": `https://${githubUser}.github.io/`
                        }
                    ];
                    console.log(values);
                    const encoded = btoa(JSON.stringify(values));
                    const targetURL = '../files?id=' + encoded;
                    window.location.href = targetURL;
                });
                itemsDiv.appendChild(dirButton);
            }
            gridDiv.appendChild(itemsDiv);
        } 
    })
    .catch(error => {
        // Handle errors
        console.error(error);
    });

}
loadDirectories();