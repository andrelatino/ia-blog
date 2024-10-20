
// Función para crear un repositorio

let githubRepoId;
let owner = githubUser;
//----------------------------------------------
// START : 1 CREATE REPOSITORY 
//----------------------------------------------
function createNewSite() {
    console.log('creando New site...');
    showPreloader();

        // Token de Acceso Personal de GitHub
    const token = githubApi; // Reemplaza con tu token
    // const owner = githubUser
    // const name = 'newRepo'; // Elige un nombre para tu repositorio
    const desc = 'IA Site - IA.Academy'; // Descripción del repositorio
    const url = `https://api.github.com/user/repos`;
    // const message = document.getElementById('message');
    // const templateRepo = document.getElementById('templateSelector').value;
    var repo = document.getElementById('new_RepoNameInput').value;
    // Datos para la creación del repositorio
    const data = {
      name: repo,
      description: desc,
      auto_init: true
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Repositorio creado:', data);
      localStorage.setItem('githubRepoName',data.name)
      localStorage.setItem('githubRepoId',data.id)

      githubRepoName = data.name;
      githubRepoId = data.id;

      addTopicsToRepository();
      createFilesInRepo(data.name);

    })
  
    .catch(error => {
        console.error('Error:', error);
    });
}


const createFilesInRepo = async (repo) => {
  const files = [
    //HOME
    { path: ".home", content: '' },
    { path: "index.html", content: '' },
    { path: "index.json", content: '' },
    //SCRIPTS
    { path: "scripts/.scripts", content: '' },
    
    { 
      path: "scripts/styles.css",
      content: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');body { font-family: 'Poppins', sans-serif; } body,
      grid-page {
        background: #263238;
        display: block;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        position: absolute;
      }
      
      grid-body {
        display: grid;
        min-height: 100vh;
        padding: 35px;
        max-width: 100%;
        margin: 0 auto;
        gap: 0px;
        align-content: start;
      }
      
      section {
        position: relative;
        height: fit-content;
        z-index: 0;
        border-radius:0px;
        overflow: hidden;
      }
      `
    },
    
    { path: "scripts/settings.json", content: '' },
    { path: "scripts/header.js", content: ''},
    { path: "scripts/footer.js", content: ''},
    // //HEADER
    // { path: "header/.widget", content: '' },
    // { path: "header/index.html", content: '' },
    // { path: "header/index.json", content: '' },
    // //FOOTER
    // { path: "footer/.widget", content: '' },
    // { path: "footer/index.html", content: '' },
    // { path: "footer/index.json", content: '' },
    // //SIDEBAR
    // { path: "sidebar/.widget", content: '' },
    // { path: "sidebar/index.html", content: '' },
    // { path: "sidebar/index.json", content: '' },

    // // ... Agrega aquí otros archivos y contenidos según sea necesario
  ];

  for (const file of files) {
    await createFiles(repo, file.path, file.content);
  }
  
  console.log("Todos los archivos han sido creados.");
  createNewPage(owner, repo, token);
};

const createFiles = async (repo, file, content) => {
  let user = githubUser;
  let email = githubEmail;
  let token = githubApi;
  let url = `https://api.github.com/repos/${user}/${repo}/contents/${file}`;

  const base64Content = btoa(content); // Codifica el contenido en Base64

  const commitData = {
    message: `Add new file ${file}`,
    committer: {
      name: user,
      email: email,
    },
    content: base64Content,
  };
  try {
      const response = await uploadFile(url, token, commitData);
      if (response.ok) {
        console.log(`File ${file} updated successfully:`, await response.json());
      } else {
        console.error(`Error updating file ${file}:`, await response.json());
      }
  } catch (error) {
      console.error(`An error occurred while creating ${file}:`, error);
  }
};

const uploadFile = async (url, token, commitData) => {
  const body = JSON.stringify(commitData);
  return await fetch(url, { method: 'PUT', headers: { 'Authorization': `token ${token}` }, body });
};
//----------------------------------------------
// END : 2 CREATE FILES
//----------------------------------------------

//----------------------------------------------
// START : 3 CREATE PAGE 
//----------------------------------------------
function createNewPage(owner, repo, token) {
  console.log('creando pagina...');
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: JSON.stringify({
      owner: owner,
      repo: repo,
      source: {
        branch: 'main',
        path: '/'
      }
    })
  };

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pages`;

  fetch(apiUrl, requestOptions)
  .then(response => {
    console.log(response);
    if (response.status === 201) {
      setTimeout(() => {
          showSuccess();
          console.log('response new New: '+response);
          return response.json();
      }, 2000); 

      setTimeout(function() {
              
        const values = 
        [
            {

                "repo": githubRepoName,
                "id": githubRepoId,
                "is": "home",
            }
        ];
        console.log(values);
        const encoded = btoa(JSON.stringify(values));      
        const targetURL = '../directories?id=' + encoded;
        console.log(targetURL);
        window.location.href = targetURL;
        
      }, 3000);
      
    } else {
      showFailure();
      // const message = document.getElementById('message');
      // message.textContent = 'URL Creation failed!';
      throw new Error('Failed to create project!');
    }
  })
  .then(data => {
    console.log('GitHub Pages creation response:', data);
  })
  .catch(error => {
    showFailure();
    console.error('Error creating GitHub Pages:', error);
    const message = document.getElementById('new_message');
    message.textContent = 'URL Creation failed!';
  });
}
//----------------------------------------------
// END : 3 CREATE PAGE 
//----------------------------------------------

//----------------------------------------------
// START : 4 CREATE TOPICS
//----------------------------------------------

async function addTopicsToRepository() {

  const topics = ['ia-site'];

  const apiUrl = `https://api.github.com/repos/${githubUser}/${githubRepoName}/topics`;

  const headers = {
    Authorization: `token ${githubApi}`,
    Accept: 'application/vnd.github.mercy-preview+json',
  };

  const data = JSON.stringify({ names: topics });

  try {
    const response = await fetch(apiUrl, { method: 'PUT', headers, body: data });
    if (response.ok) console.log('Topics added successfully.');
    else console.error('Error adding topics to the repository.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
//----------------------------------------------
// END : 4 CREATE TOPICS
//----------------------------------------------

