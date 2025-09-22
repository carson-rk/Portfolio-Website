document.addEventListener('DOMContentLoaded', () => {
    // Move all your code INSIDE the DOMContentLoaded event listener
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    // Add safety checks to prevent errors if elements don't exist
    if (!menuBtn || !mobileMenu || !closeMenu) {
        console.warn('Menu elements not found on this page');
        return;
    }

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.querySelector('div').classList.remove('translate-x-full');
        }, 10);
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.querySelector('div').classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    });
});