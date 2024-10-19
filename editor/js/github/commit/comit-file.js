// const owner = 'icheff'; // Replace with the repository owner
// const repo = 'trencito.com'; // Replace with the repository name
// const directoryPath = 'index.html'; // Replace with the directory path
// const authToken = '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'; // Replace with your GitHub token

// const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

// const headers = new Headers({
//   'Authorization': `Bearer ${authToken}`,
//   'Accept': 'application/vnd.github.v3+json',
// });

// fetch(apiUrl, { headers })
//   .then(response => response.json())
//   .then(async commits => {
//     const commitsInDirectory = [];
    
//     for (const commit of commits) {
//       const commitDetails = await fetch(commit.url, { headers }).then(response => response.json());
      
//       const filesChanged = commitDetails.files.map(file => file.filename);
//       if (filesChanged.some(file => file.startsWith(directoryPath))) {
//         commitsInDirectory.push(commit);
//       }
//     }
    
//     console.log(commitsInDirectory);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
