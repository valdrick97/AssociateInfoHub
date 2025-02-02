// You can add any JavaScript functionality here
console.log("Website Loaded!");

 <script>
        document.getElementById('navbar').innerHTML = fetch('nav.html')
            .then(response => response.text())
            .then(data => document.getElementById('navbar').innerHTML = data);
    </script>
