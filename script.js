// You can add any JavaScript functionality here
console.log("Website Loaded!");

// To load the Nav bar
 document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');  // Get the navbar element
    if (navbar) {
        fetch('nav.html')  // Fetch the nav.html file (no need for subfolder paths)
            .then(response => response.text())  // Parse the response as text
            .then(data => navbar.innerHTML = data)  // Insert the HTML into the navbar
            .catch(err => console.error('Error loading nav.html:', err));  // Error handling
    } else {
        console.error("Navbar element not found.");
    }
});

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close dropdowns if user clicks outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}

document.getElementById('open-chatbot').addEventListener('click', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    
    // Toggle visibility of the chatbot container
    chatbotContainer.style.display = (chatbotContainer.style.display === 'none' || !chatbotContainer.style.display) ? 'block' : 'none';
    
    // Check if the chatbot script is already loaded, if not, dynamically load it
    if (!document.getElementById('chatbot-script')) {
        const script = document.createElement('script');
        script.id = 'chatbot-script';
        script.src = 'https://username.github.io/chatbot-repository-name/script.js';  // Replace with the actual script URL of your chatbot
        script.onload = () => {
            console.log('Chatbot Loaded!');
        };
        document.body.appendChild(script);
    }
});
