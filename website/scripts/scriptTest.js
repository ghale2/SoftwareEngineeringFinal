const menuButton = document.getElementById('mobile-menu-button');
const slideMenu = document.getElementById('slide-menu');
const backdrop = document.getElementById('menu-backdrop');
const hamburgerOpen = document.getElementById('hamburger-open');
const hamburgerClose = document.getElementById('hamburger-close');

// Function to toggle the menu state
function toggleMenu() {
    const isOpen = slideMenu.classList.toggle('menu-hidden');

    // Toggle visibility of the menu (by removing/adding the 'menu-hidden' class)
    slideMenu.classList.toggle('menu-visible', !isOpen);

    // Toggle the backdrop visibility and pointer events
    backdrop.classList.toggle('opacity-0', isOpen);
    backdrop.classList.toggle('opacity-50', !isOpen);
    backdrop.classList.toggle('pointer-events-none', isOpen);

    // Toggle the button icons (Hamburger <-> Close)
    hamburgerOpen.classList.toggle('hidden', !isOpen);
    hamburgerClose.classList.toggle('hidden', isOpen);

    // Prevent scrolling on the body when the menu is open
    document.body.classList.toggle('overflow-hidden', !isOpen);
}

// Event listeners
menuButton.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);

// Handle keyboard event for accessibility (Escape key closes the menu)
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !slideMenu.classList.contains('menu-hidden')) {
        toggleMenu();
    }
});