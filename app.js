
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       MOBILE MENU TOGGLE
    ================================== */

    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    const menuLinks = document.querySelectorAll('#mobileMenu a');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('show');
            menu.setAttribute('aria-hidden', String(!isOpen));
            icon.src = isOpen ? './assets/close.png' : './assets/menu.png';
        });

        // Close the menu when clicking any link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('show');
                menu.setAttribute('aria-hidden', "true");
                icon.src = './assets/menu.png';
            });
        });
    }



});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll('a[href^="#"]');

    function scrollWithHeaderOffset(targetEl) {
        const headerHeight = header ? header.offsetHeight : 0; // dynamic per call
        const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementTop - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    // Same-page smooth scroll
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Ignore plain "#"
            if (!targetId || targetId === "#") return;

            // Only handle same-page hashes (not "/page#id")
            if (!targetId.startsWith("#")) return;

            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            e.preventDefault();
            scrollWithHeaderOffset(targetEl);
        });
    });

    // 🔥 Adjust scroll when landing with a hash (from another page)
    if (window.location.hash) {
        // Let the browser do its default jump first, then correct it
        setTimeout(() => {
            const targetEl = document.querySelector(window.location.hash);
            if (targetEl) {
                scrollWithHeaderOffset(targetEl);
            }
        }, 50); // small delay so we run after the default scroll
    }
});

