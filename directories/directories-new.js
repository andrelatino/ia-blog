const createContent = async () => {
  console.log("GitHub Repo Name:", githubRepoName);
  showPreloader();
  
  const dirMessage = document.getElementById('dir-message');
  console.log("dirMessage Element:", dirMessage);
  dirMessage.textContent = "Adding page...!";

  const selectElement = document.getElementById('selectDirOrFile');
  console.log("selectElement:", selectElement);
  const selectedOption = selectElement.value;
  console.log("Selected Option:", selectedOption);

  const inputElement = document.getElementById('pageName');
  console.log("inputElement:", inputElement);
  const pageName = inputElement.value;
  console.log("Page Name:", pageName);

  const githubRepo = githubRepoName;
  console.log("GitHub Repo:", githubRepo);
  const token = githubApi;
  console.log("GitHub Token:", token);

  const method = 'PUT';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `token ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'If-None-Match': '' // Include this line to bypass caching
  };
  console.log("Headers:", headers);

  let successCount = 0;
  let failCount = 0;

  const createFileOnGithub = async (addFiles) => {
    console.log("Adding File:", addFiles);
    
    let url;
    if (selectedOption === 'Page') {
      url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${pageName}/${addFiles}`;
      console.log('Page URL:', url);
    } else if (selectedOption === 'File') {
      url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${addFiles}`;
      console.log('File URL:', url);
    } else if (selectedOption === 'Widget') {
      url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${pageName}/${addFiles}`;
      console.log('Widget URL:', url);
    } else if (selectedOption === 'Global') {
      url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${pageName}/${addFiles}`;
      console.log('Global URL:', url);
    }

    const content = btoa('');
    console.log("Encoded Content:", content);

    const body = JSON.stringify({
      message: `Add new file ${pageName}`,
      committer: {
        name: githubUser,
        email: githubEmail
      },
      content: content
    });
    console.log("Request Body:", body);

    try {
      const response = await fetch(url, { method: 'PUT', headers: {'Authorization': `token ${token}`}, body });
      const data = await response.json();

      if (response.ok) {
        console.log(`File ${pageName} updated successfully:`, data);
        successCount++;
      } else {
        console.error(`Error updating file ${pageName}:`, data);
        failCount++;
      }
    } catch (error) {
      console.error(`An error occurred while creating ${pageName}:`, error);
      failCount++;
    }
  };

  if (selectedOption === 'File') { 
    console.log("Creating a single file");
    await createFileOnGithub(pageName);
  } 
  else if (selectedOption === 'Page') {
    console.log("Creating a page with multiple files");
    await createFileOnGithub('.page');
    await createFileOnGithub('index.html');
    await createFileOnGithub('index.json');
    await createFileOnGithub('settings.json');

    console.log(`Total files successfully uploaded: ${successCount}`);
    console.log(`Total files failed to upload: ${failCount}`);

    showSuccess();
    const values = 
    [
        {
            "repo":githubRepo,
            "user":githubUser,
            "dir":pageName,
            "base": `https://${githubUser}.github.io/`
        }
    ];
    console.log("Values:", values);
    const encoded = btoa(JSON.stringify(values));
    console.log("Encoded Values:", encoded);
    const targetURL = '../files?id=' + encoded;
    console.log("Redirecting to:", targetURL);
    setTimeout(() => {
      window.location.href = targetURL;
    }, 1000);
  }
  else if (selectedOption === 'Widget') {
    console.log("Creating a widget with multiple files");
    await createFileOnGithub('.widget');
    await createFileOnGithub('index.html');
    await createFileOnGithub('index.json');
    await createFileOnGithub('settings.json');

    console.log(`Total files successfully uploaded: ${successCount}`);
    console.log(`Total files failed to upload: ${failCount}`);

    showSuccess();
    const values = 
    [
        {
            "repo":githubRepo,
            "user":githubUser,
            "dir":pageName,
            "base": `https://${githubUser}.github.io/`
        }
    ];
    console.log("Values:", values);
    const encoded = btoa(JSON.stringify(values));
    console.log("Encoded Values:", encoded);
    const targetURL = '../files?id=' + encoded;
    console.log("Redirecting to:", targetURL);
    setTimeout(() => {
      window.location.href = targetURL;
    }, 1000);
  }
  else if (selectedOption === 'Global') {
    console.log("Creating a global directory with a single file");
    await createFileOnGithub('.global');

    console.log(`Total files successfully uploaded: ${successCount}`);
    console.log(`Total files failed to upload: ${failCount}`);

    showSuccess();
    const values = 
    [
        {
            "repo":githubRepo,
            "user":githubUser,
            "dir":pageName,
            "base": `https://${githubUser}.github.io/`
        }
    ];
    console.log("Values:", values);
    const encoded = btoa(JSON.stringify(values));
    console.log("Encoded Values:", encoded);
    const targetURL = '../files?id=' + encoded;
    console.log("Redirecting to:", targetURL);
    setTimeout(() => {
      window.location.href = targetURL;
    }, 1000);
  }
};

// Function to handle the change event of the select element
const handleSelectChange = () => {
  const selectElement = document.getElementById('selectDirOrFile');
  const selectedOption = selectElement.value;
  console.log("HandleSelectChange - Selected Option:", selectedOption);

  if (selectedOption === 'File') {
    const buttonTextIs = document.getElementById('createNewButton');
    buttonTextIs.textContent = 'Add New File';
    console.log('Button Text:', buttonTextIs.textContent);
  } else if (selectedOption === 'Page') {
    const buttonTextIs = document.getElementById('createNewButton');
    buttonTextIs.textContent = 'Add New Page';
    console.log('Button Text:', buttonTextIs.textContent);
  } else if (selectedOption === 'Widget') {
    const buttonTextIs = document.getElementById('createNewButton');
    buttonTextIs.textContent = 'Add New Widget';
    console.log('Button Text:', buttonTextIs.textContent);
  } else if (selectedOption === 'Global') {
    const buttonTextIs = document.getElementById('createNewButton');
    buttonTextIs.textContent = 'Add New Global';
    console.log('Button Text:', buttonTextIs.textContent);
  }
};

// Add an event listener to the select element
const selectElement = document.getElementById('selectDirOrFile');
selectElement.addEventListener('change', handleSelectChange);
console.log("Event Listener added to selectDirOrFile");
