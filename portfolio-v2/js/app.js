document.addEventListener("DOMContentLoaded", function () {
    /* ===============================
       MOBILE MENU TOGGLE
    ================================== */

    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    const menuLinks = document.querySelectorAll('#mobileMenu a');

    if (toggle && menu && icon) {
        const desktopBreakpoint = window.matchMedia('(min-width: 768px)');

        function closeMenu() {
            menu.classList.remove('show');
            menu.setAttribute('aria-hidden', 'true');
            icon.src = '../assets/menu.png';
            document.body.style.overflow = '';
        }

        function openMenu() {
            menu.classList.add('show');
            menu.setAttribute('aria-hidden', 'false');
            icon.src = '../assets/close.png';
            document.body.style.overflow = 'hidden';
        }

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.contains('show');

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close the menu when clicking any link
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close mobile menu when screen reaches desktop size
        desktopBreakpoint.addEventListener('change', (e) => {
            if (e.matches) {
                closeMenu();
            }
        });

        // Make sure menu is closed if page loads at desktop size
        if (desktopBreakpoint.matches) {
            closeMenu();
        }
    }
});