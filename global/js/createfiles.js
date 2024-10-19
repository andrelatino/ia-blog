// //-------------------------------------------------
// // START FUNCTION : CREATE NEW DEFAULT FILES
// //-------------------------------------------------

// const createFilesInRepo = async (repo) => {
//     const files = ["index.html", "settings.json", "updates.json"]; // Lista de archivos a crear
  
//     for (const file of files) {
//       await createFiles(repo, file);
//     }
  
//     console.log("Todos los archivos han sido creados.");
//   };
  
//   const createFiles = async (repo, file) => {
//     let user = githubUser;
//     let email = githubEmail;
//     let token = githubApi;
//     let url = `https://api.github.com/repos/${user}/${repo}/contents/${file}`;
//     const content = btoa(''); // Contenido del archivo en base64, aquí puedes agregar contenido específico
//     const commitData = {
//         message: `Add new file ${file}`,
//         committer: {
//           name: user,
//           email: email,
//         },
//         content: content,
//     };
//     try {
//         const response = await uploadFile(url, token, commitData);
//         if (response.ok) {
//           console.log(`File ${file} updated successfully:`, await response.json());
//         } else {
//           console.error(`Error updating file ${file}:`, await response.json());
//         }
//     } catch (error) {
//         console.error(`An error occurred while creating ${file}:`, error);
//     }
//   };
  
//   const uploadFile = async (url, token, commitData) => {
//     const body = JSON.stringify(commitData);
//     return await fetch(url, { method: 'PUT', headers: { 'Authorization': `token ${token}` }, body });
//   };
//   //-------------------------------------------------
//   // END FUNCTION : CREATE NEW DEFAULT FILES
//   //-------------------------------------------------