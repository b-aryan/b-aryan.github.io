document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.corner-button');
    
    if (themeToggle) {
        // Update button text based on theme
        function updateButtonText(theme) {
            themeToggle.textContent = theme === 'dark' ? 'Dark' : 'Light';
        }

        // Set initial theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateButtonText(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Set the theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
            
            // Debug log
            console.log('Theme switched to:', newTheme);
        });
    }

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