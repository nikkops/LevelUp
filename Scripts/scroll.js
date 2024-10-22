// Scroll right functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollRightButton = document.querySelector('.scroll-right-btn');
    const scrollLeftButton = document.querySelector('.scroll-left-btn');
    const gridContainer = document.querySelector('.grid');

    if (scrollRightButton && gridContainer) {
        scrollRightButton.addEventListener('click', function() {
            const frameWidth = document.querySelector('.frameh').offsetWidth + 20;
            gridContainer.scrollBy({
                left: frameWidth, 
                behavior: 'smooth'
            });
        });
    }

    if (scrollLeftButton && gridContainer) {
        scrollLeftButton.addEventListener('click', function() {
            const frameWidth = document.querySelector('.frameh').offsetWidth + 20;
            gridContainer.scrollBy({
                left: -frameWidth,
                behavior: 'smooth'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollButtons = document.querySelectorAll('.scroll-button');

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentContainer = this.closest('.grid-container');
            const gridContainer = parentContainer.querySelector('.grid4');

            const frameWidth = gridContainer.querySelector('.frame').offsetWidth + 20;

            if (this.classList.contains('scroll-right-btn')) {
                gridContainer.scrollBy({
                    left: frameWidth,
                    behavior: 'smooth'
                });
            } else if (this.classList.contains('scroll-left-btn')) {
                gridContainer.scrollBy({
                    left: -frameWidth,
                    behavior: 'smooth'
                });
            }
        });
    });
});
