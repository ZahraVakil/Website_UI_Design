document.addEventListener('DOMContentLoaded', function() {
    const topBar = document.querySelector('.top-bar');
    const mainHeader = document.querySelector('.main-header');
    const mainNavigation = document.querySelector('.main-navigation');

    window.addEventListener('scroll', function() {
        // Check the scroll position
        if (window.scrollY > topBar.offsetHeight) {
            topBar.style.display = 'none'; // Hide top bar
            mainNavigation.style.display = 'none'; // Hide main navigation

            // Make the main header fixed at the top
            mainHeader.style.position = 'fixed';
            mainHeader.style.top = '0';
        } else {
            topBar.style.display = 'flex'; // Show top bar
            mainNavigation.style.display = 'flex'; // Show main navigation

            // Reset the main header to its original position
            mainHeader.style.position = 'relative';
        }
    });
});

