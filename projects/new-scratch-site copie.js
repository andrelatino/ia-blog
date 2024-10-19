
// Función para crear un repositorio

let githubRepoId;
let owner = githubUser;
//----------------------------------------------
// START : 1 CREATE REPOSITORY 
//----------------------------------------------
function createScratchSite() {
    console.log('creando scratch site...');
    showPreloader();

        // Token de Acceso Personal de GitHub
    const token = githubApi; // Reemplaza con tu token
    const owner = githubUser
    // const name = 'newRepo'; // Elige un nombre para tu repositorio
    const desc = 'IA Site - IA.Academy'; // Descripción del repositorio
    const url = `https://api.github.com/user/repos`;
    // const message = document.getElementById('message');
    // const templateRepo = document.getElementById('templateSelector').value;
    var repo = document.getElementById('newRepoNameInput').value;
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
//----------------------------------------------
// END : CREATE REPOSITORY 
//----------------------------------------------

//----------------------------------------------
// START : 2 CREATE FILES
//----------------------------------------------
const createFilesInRepo = async (repo) => {
  const files = 
  [
    ".home",
    "index.html",
    "settings.json",
    "index.json",
  ];

  for (const file of files) {
    await createFiles(repo, file);
  }
  
  console.log("Todos los archivos han sido creados.");
  createScratchPage(owner, repo, token);
};

const createFiles = async (repo, file) => {
  let user = githubUser;
  let email = githubEmail;
  let token = githubApi;
  let url = `https://api.github.com/repos/${user}/${repo}/contents/${file}`;
  const content = btoa(''); // Contenido del archivo en base64, aquí puedes agregar contenido específico
  const commitData = {
      message: `Add new file ${file}`,
      committer: {
        name: user,
        email: email,
      },
      content: content,
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
function createScratchPage(owner, repo, token) {
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
          console.log('response new scratch: '+response);
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
    const message = document.getElementById('message');
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

