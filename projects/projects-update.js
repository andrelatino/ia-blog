// async function createRepo() {
//     var YOUR_TOKEN = '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';
//     var apiUrl = 'https://api.github.com';
//     var inputName = document.getElementById('inputNameValue');
//     var inputNameValue = inputName.value.toLowerCase();
//     var inputDescription = document.getElementById('inputNameValue');
//     var inputNameDescription = inputDescription.value;

//   const url = `${apiUrl}/user/repos`;
//   const headers = {
//     Authorization: `token ${YOUR_TOKEN}`,
//     'Content-Type': 'application/json',
//     Accept: 'application/vnd.github.v3+json',
//     'X-GitHub-Api-Version': '2022-11-28',
//   };
//   const body = JSON.stringify({
//     name: inputNameValue,
//     description: inputNameDescription,
//     homepage: 'https://github.com',
//     private: false,
//     is_template: false,
//   });

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers,
//       body,
//     });

//     if (response.ok) {
//       console.log('Repository created successfully!');
//     } else {
//       console.error(
//         'Failed to create repository:',
//         response.status,
//         response.statusText
//       );
//     }
//   } catch (error) {
//     console.error('Error creating repository:', error);
//   }
// }