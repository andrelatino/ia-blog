async function deleteFile(repo) {
  showPreloader();
  var apiUrl = 'https://api.github.com';
  var repoName = repo;
  var userName = githubUser;
  var token = githubApi;
  var message = document.getElementById('siteMessage');

  const url = `${apiUrl}/repos/${userName}/${repoName}`;
  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28'       
  };

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (response.status === 204) {
      
      message.textContent = 'Deleted succesfully!';
      
      setTimeout(function() {
        showSuccess();
        message.textContent = 'Reloading page...';
      }, 2000);

      setTimeout(function() {
        location.reload(true);
      }, 4000);

    } else if (response.status === 403) {
      message.textContent = 'Delete site is forbidden!';
    } else if (response.status === 404) {
      message.textContent = 'Site not found!';
    } else {
      message.textContent = 'Error deleting site!';
      console.error(
        'Failed to delete repository:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    message.textContent = 'Error deleting site!';
  }
}
function deleteCheck() {
  const siteName = document.getElementById('siteName').innerText;
  const siteID = document.getElementById('siteID').innerText;
  const input = document.getElementById('fileInput').value;
  const message = document.getElementById('siteMessage');

  if (input) {
      if (siteID === input) {
          deleteFile(siteName);
          message.textContent = 'Deleting site ...';
      } else{
          message.textContent = 'Code is wrong';
      }
  }else{
      message.textContent = 'Enter code!';
  }
}

function modalDeleteClose() {
  const modalOverlay = document.querySelector('.overlay');
  const modalDelete = document.getElementById("deleteBox");
  modalOverlay.style.display = "none";
  modalDelete.style.visibility = "hidden";
}