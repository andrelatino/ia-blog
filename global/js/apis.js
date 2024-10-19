var githubBaseUrl = localStorage.getItem('githubBaseUrl');
var githubRepoUrl = localStorage.getItem('githubRepoUrl');
var githubRepoName = localStorage.getItem('githubRepoName');
var githubUser = localStorage.getItem('githubUser');
var githubApi = localStorage.getItem('githubApi');
var githubEmail = localStorage.getItem('githubEmail');
var iconAssistant= '../global/file/assistant.svg';
var iconShortcuts= '../global/file/shortcuts.svg';

console.log ('-----------------------Github')
console.log("githubBaseUrl:", githubBaseUrl);
console.log("githubRepoUrl:", githubRepoUrl);
console.log("githubRepoName:", githubRepoName);
console.log("githubUser:", githubUser);
console.log("githubApi:", githubApi);
console.log("githubEmail:", githubEmail);
console.log ('-----------------------------')


console.log ('-----------------------Unsplash')
var unsplashApi = localStorage.getItem('unsplashApi');
console.log("unsplashApi:", unsplashApi);
console.log ('-----------------------------')

console.log ('-----------------------Pexels')
var pexelsApi = localStorage.getItem('pexelsApi');
console.log("pexelsApi:", pexelsApi);
console.log ('-----------------------------')


// Check if the current URL is neither "/servers/" nor "/dev/ia-site/servers/"
if (window.location.pathname !== '/servers/' && window.location.pathname !== '/dev/ia-site/servers/') {
    // Your code to show the message goes here
    // Retrieve the GitHub API URL from localStorage
    var githubApi = localStorage.getItem('githubApi');

    if (!githubApi) {
        // Create overlay div
        var overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2; /* Make sure the overlay is above other content */
        `;

        // Create message div
        var messageDiv = document.createElement('div');
        messageDiv.textContent = 'Your GitHub API Key server does not exist!';
        messageDiv.style.cssText = `
            background-color: red;
            color: white;
            padding: 50px;
            width: 280px;
            text-align: center;
            display: grid;
            gap: 20px;
            border-radius: 10px;
            outline: 3px solid #ffffff;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
        `;

        // Create button element
        var goToServersButton = document.createElement('button');
        goToServersButton.textContent = 'Add your API Key here';
        goToServersButton.style.cssText = `
            background: #f1f1f1;
            width: 100%;
            height: 35px;
            border: none;
            color: black;
            border-radius: 7px;
        `;

        // Function to remove the message and event listener
        function removeMessage() {
            overlay.remove();
            goToServersButton.removeEventListener('click', removeMessage);
        }

        // Add a click event handler to navigate to the desired href
        goToServersButton.addEventListener('click', function() {
            // Navigate to the href="../servers/"
            window.location.href = '../servers/';
            // Remove the message and event listener
            removeMessage();
        });

        // Append the button to the messageDiv
        messageDiv.appendChild(goToServersButton);

        // Append the message div to the overlay
        overlay.appendChild(messageDiv);

        // Append the overlay to the document body
        document.body.appendChild(overlay);
    }
}

