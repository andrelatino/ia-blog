


document.getElementById('clone_button').addEventListener('click', function() {
    const message = document.getElementById('clone_message');
    const template_from = localStorage.getItem('githubRepoName');
    // alert(template_from);
    const newRepoName = document.getElementById('clone_input').value;

    if (!newRepoName) {
        message.textContent = "Name is empty";
        return;
    }

    message.textContent = "0/2 Cloning template...";

    const token = githubApi;
    const templateOwner = githubUser;  
    
    fetch(`https://api.github.com/repos/${templateOwner}/${template_from}/generate`, {
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
            message.textContent = '1/2 Template cloned!';
            
            setTimeout(() => {
                message.textContent = '1/2 Creating URL...';
                template_page(templateOwner, newRepoName, token);
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

function template_page(owner, repo, token) {
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
        const message = document.getElementById('clone_message');
        setTimeout(() => {
            message.textContent = '2/2 URL Created!';
            
        }, 3000); 

        setTimeout(() => {
            message.textContent = 'Cloned successfully!';
            
        }, 5000); 
        
      } else {
        const message = document.getElementById('clone_message');
        message.textContent = 'URL Creation failed!';
        throw new Error('Failed to create project!');
      }
    })
    .then(data => {
      console.log('GitHub Pages creation response:', data);
    })
    .catch(error => {
      console.error('Error creating GitHub Pages:', error);
      const message = document.getElementById('clone_message');
      message.textContent = 'URL Creation failed!';
    });
}