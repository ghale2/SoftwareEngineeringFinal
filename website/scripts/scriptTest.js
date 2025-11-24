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

// /scriptTest.js
const menuButton = document.getElementById('mobile-menu-button');
const slideMenu = document.getElementById('slide-menu');
const backdrop = document.getElementById('menu-backdrop');
const hamburgerOpen = document.getElementById('hamburger-open');
const hamburgerClose = document.getElementById('hamburger-close');

// Guard: only run if all elements exist
if (menuButton && slideMenu && backdrop && hamburgerOpen && hamburgerClose) {

    // Make sure we start in a consistent state:
    // menu is hidden by default (HTML should also start with class="menu-hidden")
    slideMenu.classList.add('menu-hidden');
    slideMenu.classList.remove('menu-visible');

    // backrop hidden by default
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-50');

    // show hamburger, hide close icon by default
    hamburgerOpen.classList.remove('hidden');
    hamburgerClose.classList.add('hidden');

    function toggleMenu() {
        // Is it currently open?
        const currentlyOpen = slideMenu.classList.contains('menu-visible');
        const willOpen = !currentlyOpen;

        // Slide menu visibility
        slideMenu.classList.toggle('menu-visible', willOpen);
        slideMenu.classList.toggle('menu-hidden', !willOpen);

        // Backdrop
        backdrop.classList.toggle('opacity-50', willOpen);
        backdrop.classList.toggle('opacity-0', !willOpen);
        backdrop.classList.toggle('pointer-events-none', !willOpen);

        // Icons
        hamburgerOpen.classList.toggle('hidden', willOpen);
        hamburgerClose.classList.toggle('hidden', !willOpen);

        // Body scroll lock
        document.body.classList.toggle('overflow-hidden', willOpen);
    }

    // Click handlers
    menuButton.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', toggleMenu);

    // Escape key closes menu if open
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && slideMenu.classList.contains('menu-visible')) {
            toggleMenu();
        }
    });
}
