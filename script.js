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
