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

//Animation for Recent project page made with the help of ChatGPT
document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = document.querySelectorAll("h2");

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing once faded in
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    h2Elements.forEach(h2 => observer.observe(h2));
});