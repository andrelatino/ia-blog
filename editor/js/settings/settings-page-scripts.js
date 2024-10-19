
async function pageScriptsLoad(owner, repo, path, token) {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
        
            // Load settings from localStorage
            var getSettingsStr = localStorage.getItem('pageSettings');
            var getSettings = getSettingsStr ? JSON.parse(getSettingsStr) : null;
        
            // Fallback to default if localStorage is empty or invalid
            var settings = getSettings || [{"header":[],"footer":[]}];
        
            // HEADER
            const headerItems = data.map(item => ({ "value": item.name, "selected": false }));
            for (const headerFile of settings[0].header) {
                const item = headerItems.find(item => item.value === headerFile);
                if (item) {
                    item.selected = true;
                }
            }
            var headerChoices = new Choices('#selectHeader', {
                allowHTML: true,
                removeItemButton: true,
            });
            headerChoices.setChoices(headerItems);
        
            // // BODY
            // const bodyItems = data.map(item => ({ "value": item.name, "selected": false }));
            // for (const bodyFile of settings[0].body) {
            //     const item = bodyItems.find(item => item.value === bodyFile);
            //     if (item) {
            //         item.selected = true;
            //     }
            // }
            // var bodyChoices = new Choices('#selectBody', {
            //     allowHTML: true,
            //     removeItemButton: true,
            // });
            // bodyChoices.setChoices(bodyItems);
        
            // FOOTER
            const footerItems = data.map(item => ({ "value": item.name, "selected": false }));
            for (const footerFile of settings[0].footer) {
                const item = footerItems.find(item => item.value === footerFile);
                if (item) {
                    item.selected = true;
                }
            }
            var footerChoices = new Choices('#selectFooter', {
                allowHTML: true,
                removeItemButton: true,
            });
            footerChoices.setChoices(footerItems);
        
            // Save Data
            let selectedValues = { header: '', footer: '' };
        
            headerChoices.passedElement.element.addEventListener('change', function (event) {
                selectedValues.header = headerChoices.getValue(true);
                console.log('Header selected items:', selectedValues.header);
                settingsReadyForSave(selectedValues);
            });
        
            // bodyChoices.passedElement.element.addEventListener('change', function (event) {
            //     selectedValues.body = bodyChoices.getValue(true);
            //     console.log('Body selected items:', selectedValues.body);
            //     settingsReadyForSave(selectedValues);
            // });
        
            footerChoices.passedElement.element.addEventListener('change', function (event) {
                selectedValues.footer = footerChoices.getValue(true);
                console.log('Footer selected items:', selectedValues.footer);
                settingsReadyForSave(selectedValues);
            });
        
            document.getElementById("save-settings").addEventListener("click", function () {
                console.log('save-settings clicked');
                const pageSettingsExport = settingsReadyForSave(selectedValues.header, selectedValues.body, selectedValues.footer);
                console.log('pageSettingsExport:', pageSettingsExport);
            
                // Convert the object to a JSON string
                const pageSettingsJson = JSON.stringify(pageSettingsExport);
            
                // Pass the JSON string to the save function
                pageSettingsSave(githubUser, githubRepoName, 'settings-0.json', pageSettingsJson, githubApi);
            });
            
        }
         else {
            console.error(`FAILED: ${response.status}`);
        }
    } catch (error) {
        console.error('ERROR', error);
    }
}

// SAVE SELECTED DATA
// var selectedValues = { header: '', body: '', footer: '' };


function settingsReadyForSave(header, footer) {
   
    var saveSettingsButton = document.getElementById("save-settings");
    saveSettingsButton.classList.remove("disabled-button");

    var settings = [{ "header": header,"footer": footer }];
    console.log('settingsReadyForSave: ' + JSON.stringify(settings, null, 2));
    var typeOfMyVar = typeof settings;
    console.log('Settings Change: ' + typeOfMyVar);
    settingsUpdated = localStorage.setItem('settingsUpdated', JSON.stringify(settings));
    var settingsJson = localStorage.setItem('settingsJson', JSON.stringify(settings));
    
    pageSettings = localStorage.setItem('pageSettings', JSON.stringify(settings));
    return settings; // Add this line to return the settings object
}
