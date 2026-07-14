// ================================
// SELECT ELEMENTS
// ================================

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let cartBtn = document.querySelector('#cart-btn');

// ================================
// MENU BUTTON
// ================================

menuBtn.onclick = () => {

    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

};

// ================================
// SEARCH BUTTON
// ================================

searchBtn.onclick = () => {

    searchForm.classList.toggle('active');

    navbar.classList.remove('active');
    cartItem.classList.remove('active');

};

// ================================
// CART BUTTON
// ================================

cartBtn.onclick = () => {

    cartItem.classList.toggle('active');

    navbar.classList.remove('active');
    searchForm.classList.remove('active');

};

// ================================
// CLOSE ALL WHEN SCROLLING
// ================================

window.onscroll = () => {

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

};

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('.navbar a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,
                behavior: "smooth"

            });

        }

        navbar.classList.remove('active');

    });

});

// ================================
// ACTIVE NAVBAR LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// HEADER SHADOW ON SCROLL
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ================================
// BUTTON RIPPLE EFFECT
// ================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ================================
// FADE-IN ANIMATION
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".box, .content, .image").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".8s ease";

    observer.observe(item);

});