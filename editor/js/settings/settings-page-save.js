// async function pageSettingsSave(owner, repo, path, content, token) {
//     try {
//         // Get the file to obtain its SHA (if it exists)
//         let sha = null;
//         const getFileResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         if (getFileResponse.ok) {
//             const fileData = await getFileResponse.json();
//             sha = fileData.sha; // Get SHA of the existing file
//         }

//         // Prepare the content for updating
//         const updateContent = {
//             message: "Updating settings",
//             content: btoa(unescape(encodeURIComponent(content))), // Encode content to Base64
//             sha: sha // Include SHA if updating an existing file
//         };

//         // Update or create the file
//         const putResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
//             method: 'PUT',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updateContent)
//         });

//         if (putResponse.ok) {
//             console.log('settings.json updated/saved');
//         } else {
//             console.error(`Error in PUT request: ${putResponse.status}`);
//         }
//     } catch (error) {
//         console.error('ERROR', error);
//     }
// }

// Example usage
// const content = JSON.stringify({ /* your settings object */ });
// pageSettingsSave(githubUser, githubRepoName, 'settings-0.json', content, githubApiToken);
