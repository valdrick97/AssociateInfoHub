// You can add any JavaScript functionality here
console.log("Website Loaded!");

// To load the Nav bar
 document.addEventListener('DOMContentLoaded', function () {
    // Ensure the element exists before trying to modify it
    const navbar = document.getElementById('navbar');
    if (navbar) {
        fetch('nav.html')
            .then(response => response.text())
            .then(data => navbar.innerHTML = data)
            .catch(err => console.error('Error loading nav.html:', err));
    } else {
        console.error("Navbar element not found.");
    }
});
