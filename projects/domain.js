  async function checkAllIPsPointingToDomain(domain, expectedIPs) {
    try {
      const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
      const data = await response.json();
      const ipsFromDNS = data.Answer.map(record => record.data);
  
      // Verificar si todas las IPs esperadas están en la respuesta DNS
      return expectedIPs.every(expectedIP => ipsFromDNS.includes(expectedIP));
    } catch (error) {
      console.error('Error al verificar el dominio:', error);
      return false;
    }
  }

  // Lista de IPs esperadas
  const expectedIPs = ["185.199.108.153", "185.199.111.153", "185.199.110.153", "185.199.109.153"];
  
  // Event listener para el botón
  document.getElementById('domain_button').addEventListener('click', function() {
    const domain = document.getElementById('domain_input').value;
    const message = document.getElementById('domain_message');
    const getDomain = document.getElementById('get-domain');
    
  
    if (domain) {
      checkAllIPsPointingToDomain(domain, expectedIPs).then(allPointing => {
        if (allPointing) {
            message.textContent = 'Ips Ok!';
            getDomain.textContent = domain;
            const step3 = document.querySelector('.step.step3');
            step3.click();
          
        } else {
            message.textContent = 'Not pointing';
        }
      });
    } else {
        message.textContent = 'Enter domain!';
    }
  });
  
  function showContent(stepNumber) {
    // Ocultar todo el contenido
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`content-${i}`).style.display = 'none';
    }
  
    // Mostrar el contenido para el paso actual
    document.getElementById(`content-${stepNumber}`).style.display = 'grid';
  }
  


  const add_domain = async () => {

    const add_domain = document.getElementById('get-domain').textContent;
    const current_domain = document.getElementById('current-domain');
    
    const add_token = githubApi;
    const add_owner = githubUser;
    const add_title = document.getElementById('flip-title');
    const add_repo = add_title.textContent;
    const add_url = `https://api.github.com/repos/${add_owner}/${add_repo}/pages`;
    const add_message3 = document.getElementById('domain_message3');
  
    const headers = {
      'Authorization': `Bearer ${add_token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Your-User-Agent'
    };
        // https_enforced: true,
    const body = JSON.stringify({
      owner: add_owner,
      repo: add_repo,
      cname: add_domain,
      source: {
        branch: 'main',
        path: '/'
      }
    });
  
    const options = {
      method: 'PUT',
      headers,
      body
    };
  
    try {
      const response = await fetch(add_url, options);
      if (response.status === 204) {
        current_domain.textContent = add_domain;
        add_message3.textContent  = 'Domain added!';
        const step4 = document.querySelector('.step.step4');
        step4.click();
        console.log('Domain added successfully');
      } else if (response.status === 400) {
        add_message3.textContent  = 'This domain is already taken in other site!';
        console.log('Domain added successfully');
      }else {
        add_message3.textContent  = 'Failed, try again!';
        console.error('Failed to add domain:', response.statusText);
      }
    } catch (error) {
      add_message3.textContent  = error;
      console.error('Error:', error);
    }
  };

  const delete_domain = async () => {

    const add_domain = null;
    const add_token = githubApi;
    const add_owner = githubUser;
    const add_title = document.getElementById('flip-title');
    const add_repo = add_title.textContent;
    const add_message4 = document.getElementById('domain_message4');
    const add_url = `https://api.github.com/repos/${add_owner}/${add_repo}/pages`;
  
    const headers = {
      'Authorization': `Bearer ${add_token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Your-User-Agent'
    };
        // https_enforced: true,
    const body = JSON.stringify({
      owner: add_owner,
      repo: add_repo,
      cname: add_domain,
      source: {
        branch: 'main',
        path: '/'
      }
    });
  
    const options = {
      method: 'PUT',
      headers,
      body
    };
  
    try {
      const response = await fetch(add_url, options);
      if (response.status === 204) {
        add_message4.textContent  = 'Domain deleted!';
        console.log('Domain deleted!');
      } else {
        add_message4.textContent  = 'Error, try again';
        console.error('Failed to add domain:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  async function getRepoPageHealth(owner, repo) {
    const button = document.querySelector('.step.step1');
    button.click();   
    const url = `https://api.github.com/repos/${owner}/${repo}/pages/health`;
    let retries = 0;
    const maxRetries = 5; // Número máximo de reintentos

    while (retries < maxRetries) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${githubApi}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            if (!response.ok) {
                console.log(response.status);
                const button = document.querySelector('.step.step2');
                button.click();    
                throw new Error(`Error: ${response.status}`);
                
            } else if (response.status === 200) {
                console.log('200');
                const button = document.querySelector('.step.step4');
                button.click();         
                const data = await response.json();
                const currentDomain = document.getElementById('current-domain');
                currentDomain.textContent = data.domain.host;
                return hostValue; // Return the 'host' value
            } else if (response.status === 202) {
                console.log('202 - Reintentando...');
                retries++;
                await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2 segundos antes de reintentar
                continue; // Continuar con el siguiente intento
            }
            
        } catch (error) {
            console.error('Error al obtener la salud de las páginas del repositorio:', error);
            return null;
        }
    }

    console.error('Se alcanzó el máximo número de reintentos');
    return null;
}



function addButtonClickListener(buttonId, callback) {
    // Select the button by its ID
    var button = document.getElementById(buttonId);

    // Check if the button exists
    if (button) {
        // Add the event listener to the button for the click event
        button.addEventListener('click', function() {
            callback();
        });
    } else {
        console.warn('Button with ID ' + buttonId + ' not found.');
    }
}

// Example usage
addButtonClickListener('domain-btn', function() {
    console.log('Button clicked!');
    const flipTitle = document.getElementById('flip-title').textContent;
    console.log(flipTitle);
    
    getRepoPageHealth(githubUser, flipTitle).then(data => {
        if (data) {
            console.log('Datos de salud de las páginas:', data);
        }
    });
});
