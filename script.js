// // Keep your existing ASCII art loading code
// fetch('ascii_art.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('ascii-art').innerHTML = data;
//     });

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function
    function smoothScroll(event) {
        if (event.target.hash !== '') {
            event.preventDefault();
            const hash = event.target.hash;
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
});