/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll(".section");
const navMenu = document.querySelector(".navbar__menu");
const scrollToTopButton = document.querySelector(".scroll-to-top");

function generateNav() {
    const navBarList = document.querySelector("#navbar__list");
    sections.forEach((element) => {
        const navSection = document.createElement("li");
        const sectionName = element.getAttribute("data-nav");
        const sectionId = element.getAttribute("id");
        navSection.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
        navBarList.appendChild(navSection);
    });
}

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight - 100) && rect.bottom >= (window.innerHeight - 100);
}


function addActiveIfInViewport() {
    for (let i = 0; i < sections.length; i++) {

        const section = sections[i];

        let currentMenuLinkActive = document.querySelector("[href='#" + section.id + "']");
        if (isElementInViewport(section)) {
            section.classList.add("your-active-class");
            currentMenuLinkActive.classList.add('your-active-link');
        } else {
            currentMenuLinkActive.classList.remove('your-active-link');
        }
    }
}

let timerUserScrolling;

function hideNavBar() {
    navMenu.style.display = "block";

    if (timerUserScrolling != null) {
        clearTimeout(timerUserScrolling)
    }

    if (window.pageYOffset > 50) {
        timerUserScrolling = setTimeout(() => {
            navMenu.style.display = "none";
        }, 1000);
    }
}

function goToTopButton() {
    scrollToTopButton.style.display = "none";

    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = "block";
    }
}

function showButton() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


document.addEventListener('DOMContentLoaded', () => {
    scrollToTopButton.style.display = "none";
    generateNav();
});

window.addEventListener('click', () => {
    showButton();
});

window.addEventListener('scroll', () => {
    hideNavBar();
    goToTopButton();
    addActiveIfInViewport();
});
