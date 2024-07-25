window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const mainNavigation = document.querySelector('.main-navigation');
    const scrollPosition = window.scrollY;

    // Set the threshold for scroll
    if (scrollPosition > 100) { // Adjust the value as needed
        header.style.display = 'none';
        mainNavigation.style.display = 'none';
    } else {
        header.style.display = 'block';
        mainNavigation.style.display = 'flex'; // or 'block' if it was originally block
    }
});