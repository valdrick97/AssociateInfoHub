// You can add any JavaScript functionality here
console.log("Website Loaded!");

// To load the Nav bar
 window.onload = function() {
    document.getElementById('navbar').innerHTML = fetch('nav.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar').innerHTML = data);
};
