/**
 * Website Project
 * Author: Max
 * Date: 10/11/2024
 * 
 * Script to load navbar and footer from thier respective html files
 */


fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            
        })
        .catch(error => console.error('Error loading navigation bar:', error));

fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('linkfooter').innerHTML = data;
            
        })
        .catch(error => console.error('Error loading footer:', error));


