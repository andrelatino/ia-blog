
// Create a map to associate functions with plugin IDs
const pluginFunctions = {
  "unsplash": unsplash_check_api,
  "openai": openai_check_api,
  "pexels": pexels_check_api,
};

function pluginsList() {
  fetch("plugins.json")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          const getTotal = data.length;
          const showTotal = getTotal === undefined ? 0 : getTotal;

          const addSubtitle = document.getElementById('grid');
          addSubtitle.className = 'plugins-grid';
          addSubtitle.innerHTML = `
              <div class='plugins-subtitle'>
              <p>Total: ${showTotal}</p>
              <button id="addNewSite" onclick="modalOpen();" class="plugins-add">
                  <img class="addIcon" src="../global/file/add.svg">
              </button>
              </div>`;

          const gridDiv = document.getElementById('grid');
          for (const plugin of data) {
            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'plugins-items';
            itemsDiv.innerHTML = `
                <div class="plugins-content">       
                <img class="admin-sidebar-plugin-icon" src="${plugin.icon}">
                <h2>${plugin.title}</h2>				
                <input id="${plugin.id}_input" type="password" required>
                <button id="${plugin.id}_btn" class="plugins-button">Check API Key</button>	
                </div>`;
            gridDiv.appendChild(itemsDiv);
            // Attach the corresponding function to the button's click event
            document.getElementById(`${plugin.id}_btn`).addEventListener('click', pluginFunctions[plugin.id]);
        }
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
pluginsList();