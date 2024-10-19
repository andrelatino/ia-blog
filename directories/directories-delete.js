// Add a delete button to each item
function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.className = 'directories-delete';
  deleteButton.innerText = 'X';
  return deleteButton;
}

function deleteItem(sha,path,repo) {
  const owner = githubUser; 
  const baseURL = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = new Headers({
      'Authorization': `Bearer ${githubApi}`,
      'Accept': 'application/vnd.github.v3+json',
      'X-GitHub-Api-Version': '2022-11-28',
  });

  const requestBody = JSON.stringify({
    owner: owner,
    repo: repo,
    path: path,  
    message: 'Delete file', // You can customize the commit message
      committer: {
          name: githubUser,
          email: 'octocat@github.com'
      },
      sha: sha,
  });

  fetch(baseURL, {
      method: 'DELETE',
      headers: headers,
      body: requestBody,
  })
  .then(response => {
      if (response.status === 200) {
          // Item deleted successfully, you can refresh the page or update the UI as needed
          console.log('Item deleted successfully');
          // Reload the directories after deletion
          loadDirectories();
      } else {
          console.error('Failed to delete item');
      }
  })
  .catch(error => {
      console.error('Error deleting item:', error);
  });
}