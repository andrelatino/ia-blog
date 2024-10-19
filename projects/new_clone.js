
// var cloneCurrentUser = localStorage.getItem('githubUser');
// var cloneTemplate = localStorage.getItem('githubRepoName');
// var cloneCurrentApi = localStorage.getItem('githubApi');
// var cloneNewName = document.getElementById('new_clone_input').value;

var cloneCurrentUser = 'es-ia-academy';
var cloneCurrentApi = '';

var cloneInputUser = 'icheff';
var cloneInputApi = '';

var cloneTemplate = 'emptySite';
var cloneNewName = 'site';
var cloneMessage = document.getElementById('new_clone_message');

console.log('CLONE VARS ----------------------------');
console.log(cloneCurrentUser);
console.log(cloneTemplate);
console.log(cloneNewName);
console.log(cloneCurrentApi);

document.getElementById('new_clone_button').addEventListener('click', function() {

  showPreloader();
    
  if (!cloneNewName) {cloneMessage.textContent = "Name is empty";return;}
    
    cloneMessage.textContent = "0/2 Cloning template...";
    fetch(`https://api.github.com/repos/${cloneInputUser}/${cloneTemplate}/generate`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${cloneCurrentApi}`,
            'Accept': 'application/vnd.github.baptiste-preview+json'
        },
        body: JSON.stringify({
            name: cloneNewName,
            description:'Site',
            private: false
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.full_name) {
            cloneMessage.textContent = '1/2 Template cloned!';
            setTimeout(() => {
                cloneMessage.textContent = '1/2 Creating Page...';
                new_clone_page(cloneCurrentUser, cloneNewName, cloneCurrentApi);
            }, 3000); 
              
        } else {
            cloneMessage.textContent = `Template ${data.message}`;
        }
    })
    .catch(error => {
        console.error('Hubo un error:', error);
        cloneMessage.textContent = 'Error cloning template';
    });
});

function new_clone_page(cloneCurrentUser, cloneTemplate, cloneCurrentApi) {
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cloneCurrentApi}`,
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      body: JSON.stringify({
        owner: cloneCurrentUser,
        repo: cloneTemplate,
        source: {
          branch: 'main',
          path: '/'
        }
      })
    };
  
    const apiUrl = `https://api.github.com/repos/${cloneCurrentUser}/${cloneTemplate}/pages`;
  
    fetch(apiUrl, requestOptions)
    .then(response => {
      console.log(response);
      if (response.status === 201) {
        const cloneMessage = document.getElementById('clone_message');
        setTimeout(() => {
            cloneMessage.textContent = '2/2 Page Created!';
        }, 3000); 

        setTimeout(() => {
            new_cloneTag()
            cloneMessage.textContent = 'Adding tag...';
        }, 5000); 
        
      } else {
        const cloneMessage = document.getElementById('clone_message');
        cloneMessage.textContent = 'URL Creation failed!';
        throw new Error('Failed to create project!');
      }
    })
    .then(data => {
      console.log('GitHub Pages creation response:', data);
    })
    .catch(error => {
      console.error('Error creating GitHub Pages:', error);
      const cloneMessage = document.getElementById('clone_message');
      cloneMessage.textContent = 'URL Creation failed!';
    });
}

async function new_cloneTag() {
  const topics = ['ia-site'];
  const apiUrl = `https://api.github.com/repos/${cloneCurrentUser}/${cloneNewName}/topics`;
  const headers = {
    Authorization: `Bearer ${cloneCurrentApi}`,
    Accept: 'application/vnd.github.mercy-preview+json',
  };
  const data = JSON.stringify({ names: topics });
  
  try {
    const response = await fetch(apiUrl, { method: 'PUT', headers, body: data });
    if (response.ok) {
      setTimeout(function() {
        showSuccess();
        message.textContent = 'Reloading page...';
      }, 2000);

      setTimeout(function() {
        location.reload(true);
      }, 4000);
    } else {
      console.error('Error adding topics to the repository.');
     
    }
  } catch (error) {
    console.error('An error occurred:', error);
   
  }
}
