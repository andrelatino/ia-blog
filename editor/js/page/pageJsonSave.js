
// Function to get URL parameter value by name
function getUrlValues(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


  const encodedValue = getUrlValues('id');
  const decodedValues = JSON.parse(atob(encodedValue));

  for (const item of decodedValues) {

      var pageIs = item.pageIs;
      //GET VALUES FROM ENCODED URL
      var devJsonSha = item.devJsonSha;
      var devJsonRaw = item.devJsonRaw;
      var devJsonApi = item.devJsonApi;

      var indexHtmlSha = item.indexHtmlSha;
      var indexHtmlRaw = item.indexHtmlRaw;
      var indexHtmlApi = item.indexHtmlApi;
      
      var pageTitlePath = item.repoName.toLowerCase() + '-' + item.indexHtmlPath.replace(".", "-").toLowerCase();
      localStorage.setItem('pageID', pageTitlePath.toLowerCase());



      var pageTitleRepo = item.repoName;

      var base = item.base;
      var createUrl = base
      var titleText = document.getElementById('site-title');
      titleText.innerHTML = `<a href='${createUrl}'>${createUrl}</a>`;

      var prodJsonSha = item.prodJsonSha;
      var prodJsonRaw = item.prodJsonRaw;
      var prodJsonApi = item.prodJsonApi;
      
  }
 
  console.log(decodedValues);
// Function to remove all divs with the class '.admin-buttons'


const pageJsonSave = async () => {
  
  // showPreloader();
  const pageID = pageJsonIds();
  const gridContent = document.getElementById('grid').innerHTML.replace(/\n\s+/g, '');
  const encodedGridContent = encodeTextNodes(gridContent);
  const cleanedGridContent = removeAdminButtons(encodedGridContent);
  const pageData = {
    pageId: pageID,
    pageHtml: cleanedGridContent,
  };

  const json = JSON.stringify(pageData, null, 2).trim();

  const url = newUrl;
  const method = 'PUT';
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${githubApi}`,
      'X-GitHub-Api-Version': '2022-11-28'
  };

  const content = btoa(json);

  const body = JSON.stringify({
      message: 'Site updated',
      committer: {
          name: githubUser,
          email: 'octocat@github.com'
      },
      content: content,
      // sha:sha

  });

  const response = await fetch(url, { method, headers, body });
  const data = await response.json();

  var devJsonOldSha = devJsonSha;
  var devJsonOldApi = devJsonApi;

  if (response.ok) {

    console.log('New API Url: '+url);
    console.log('i will delete: '+devJsonOldApi);

    devJsonDeleteOldUrl(devJsonOldApi, devJsonOldSha);
    
    const devJsonSha = data.content.sha;
    const devJsonRaw = data.content.download_url;
    const devJsonApi = data.content.url;

    devJsonEncodeNewUrl(devJsonSha, devJsonRaw, devJsonApi);
    
} else {
    console.error('Error updating file');
}
};

function removeAdminButtons(htmlContent) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const adminButtonsDivs = tempDiv.querySelectorAll('.admin-buttons');
  adminButtonsDivs.forEach((div) => div.parentNode.removeChild(div));
  return tempDiv.innerHTML;
}
function encodeTextNodes(content) {
  // Convert the string back to a DOM element for processing
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  const walk = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while(node = walk.nextNode()) {
      const rawText = node.nodeValue;
      const encodedText = encodeToUnicodeEscape(rawText);
      if (rawText !== encodedText) {
          node.nodeValue = encodedText;
      }
  }
  return tempDiv.innerHTML;
}
function encodeToUnicodeEscape(str) {
  return str.replace(/[\u007F-\uFFFF]/g, function(char) {
      return "\\u" + ("0000" + char.charCodeAt(0).toString(16)).slice(-4);
  });
}
function pageJsonIds() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}
//UPDATE ENCODED URL 
function devJsonEncodeNewUrl (devJsonSha, devJsonRaw, devJsonApi){

  console.log('New RAW SHA:', devJsonSha);
  console.log('New API URL:', devJsonApi);
  console.log('New Raw URL:', devJsonRaw);

  const values = [
      {
           "pageIs":pageIs,
           "indexHtmlRaw": indexHtmlRaw,                            
           "indexHtmlApi": indexHtmlApi,
           "indexHtmlSha": indexHtmlSha,
           "indexHtmlPath": pageTitlePath,
           "repoName": pageTitleRepo,
           "devJsonRaw": devJsonRaw,                            
           "devJsonApi": devJsonApi,
           "devJsonSha": devJsonSha,  
           "prodJsonRaw": prodJsonRaw,                            
           "prodJsonApi": prodJsonApi,
           "prodJsonSha": prodJsonSha,
           "base": base

      }
  ];
  console.log('savedURL:', JSON.stringify(values, null, 2));

  const encoded = btoa(JSON.stringify(values));
  const newUrl = window.location.href.replace(/([?&])id=([^&#]*)/i, `$1id=${encoded}`);
  window.history.replaceState({}, '', newUrl);
};

  //DELETE OLD URL 
  async function devJsonDeleteOldUrl(oldUrl, oldSha) {
    const url = oldUrl;
    const headers = {
      'Authorization': `Bearer ${githubApi}`,
      'Accept': 'application/vnd.github.v3+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'If-None-Match': '' // Include this line to bypass caching   
    };
    const requestBody = JSON.stringify({
      message: 'File deleted',
      sha: oldSha
    });
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers,
        body: requestBody  // Include the request body with the SHA
      });
      if (response.status === 200) {
        console.log('File deleted');
        location.reload(true);
      }
        else {
        console.error(
          'Failed to delete file:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }

  
  