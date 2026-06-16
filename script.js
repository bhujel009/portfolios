// ======================================
// MOBILE NAVIGATION
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(255,255,255,0.98)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.92)";

        navbar.style.boxShadow =
            "none";
    }

});

// ======================================
// ACTIVE NAVIGATION LINK
// ======================================

const currentPage =
    window.location.pathname.split("/").pop();

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});

// ======================================
// FADE IN ANIMATION
// ======================================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

const hiddenElements =
    document.querySelectorAll(
        ".project-card, .service-card, .education-card, .faq-card, .contact-card, .timeline-item"
    );

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ======================================
// SCROLL TO TOP ON PAGE LOAD
// ======================================

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ======================================
// SIMPLE FORM MESSAGE
// ======================================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you for your inquiry. I will get back to you soon."
            );

            contactForm.reset();

        }
    );

}

// ======================================
// IMAGE HOVER PRELOAD
// ======================================

const images =
    document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });

});

// ======================================
// YEAR AUTO UPDATE
// ======================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

// ======================================
// PAGE LOADED EFFECT
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded-page");

});