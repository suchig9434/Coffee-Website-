/*=========================================
        BrewNest Coffee Website
        Author : Suchi Goel
==========================================*/

// =============================
// MOBILE MENU
// =============================

const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// =============================
// STICKY NAVBAR
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// =============================
// DARK MODE
// =============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");

        } else {

            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");

        }

    });

}

// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =============================
// BACK TO TOP
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =============================
// COUNTER ANIMATION
// =============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 150;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 15);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// =============================
// SCROLL REVEAL
// =============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

// =============================
// COFFEE CARD HOVER
// =============================

const cards = document.querySelectorAll(".coffee-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =============================
// TESTIMONIAL SLIDER
// =============================

let slideIndex = 0;

const testimonials = document.querySelectorAll(".testimonial");

function showTestimonials() {

    testimonials.forEach(slide => {

        slide.style.display = "none";

    });

    slideIndex++;

    if (slideIndex > testimonials.length) {

        slideIndex = 1;

    }

    if (testimonials.length > 0) {

        testimonials[slideIndex - 1].style.display = "block";

    }

    setTimeout(showTestimonials, 4000);

}

showTestimonials();

// =============================
// NEWSLETTER FORM
// =============================

const newsletter = document.querySelector("#newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = this.querySelector("input").value;

        if (email === "") {

            alert("Please enter your email.");

        } else {

            alert("🎉 Thank you for subscribing!");

            this.reset();

        }

    });

}

// =============================
// CONTACT FORM
// =============================

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("✅ Your message has been sent successfully!");

        contactForm.reset();

    });

}

// =============================
// LOADING SCREEN
// =============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// =============================
// CURRENT YEAR
// =============================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("☕ BrewNest Loaded Successfully!");