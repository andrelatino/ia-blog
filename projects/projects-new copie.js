    document.getElementById('cloneRepoBtn').addEventListener('click', function() {
      const message = document.getElementById('message');
      const templateRepo = document.getElementById('templateSelector').value;
      const newRepoName = document.getElementById('newRepoNameInput').value;

      if (!newRepoName) {
          message.textContent = "Name is empty!";
          return;
      }

      message.textContent = "0/3 Cloning site";

      const token = githubApi;
      const templateOwner = githubUser;  // Asegúrate de cambiar esto si es necesario

      fetch(`https://api.github.com/repos/${templateOwner}/${templateRepo}/generate`, {
          method: 'POST',
          headers: {
              'Authorization': `token ${token}`,
              'Accept': 'application/vnd.github.baptiste-preview+json'
          },
          body: JSON.stringify({
              name: newRepoName,
              description:'Site',
              private: false
          })
      })
      .then(response => response.json())
      .then(data => {
          if (data.full_name) {
              message.textContent = '1/3 Site cloned!';
              
              setTimeout(() => {
                  message.textContent = '1/3 Creating page';
                  createPage(templateOwner, newRepoName, token);
              }, 3000); 
                
          } else {
              message.textContent = `Template ${data.message}`;
          }
      })
      .catch(error => {
          console.error('Hubo un error:', error);
          message.textContent = 'Error cloning template';
      });
  });

function createPage(owner, repo, token) {
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
        const message = document.getElementById('message');
        setTimeout(() => {
            message.textContent = '2/3 Page created!';
            return response.json();
        }, 2000); 

        setTimeout(() => {
            message.textContent = '2/3 Page created!';
            return response.json();
        }, 4000);

        setTimeout(function() {
          message.textContent = '3/3 Reloading...';
        }, 6000);
  
        setTimeout(function() {
          location.reload(true);
        }, 8000);
        
      } else {
        const message = document.getElementById('message');
        message.textContent = 'URL Creation failed!';
        throw new Error('Failed to create project!');
      }
    })
    .then(data => {
      console.log('GitHub Pages creation response:', data);
    })
    .catch(error => {
      console.error('Error creating GitHub Pages:', error);
      const message = document.getElementById('message');
      message.textContent = 'URL Creation failed!';
    });
  }