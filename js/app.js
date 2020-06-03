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
const menuLinks = document.querySelectorAll("menu__link");
const navMenu = document.querySelector(".navbar__menu");
const scrollToTopButton = document.querySelector(".scroll-to-top");

// build the nav
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

//add active state in the menu
function addActiveIfClickNavBar() {
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function () {
            let currentActive = document.querySelector("section.your-active-class");
            if (currentActive.length > 0) {
                currentActive[0].className = currentActive[0].className.replace(" your-active-class", "");
            }
            menuLinks[i].className += " your-active-class";
        });
    }
}

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}

function addActiveIfInViewport() {
    document.addEventListener("scroll", () => {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];

            if(isElementInViewport(section)) {
                section.classList.add("your-active-class");
            } else
            {
                section.classList.remove("your-active-class");
            }
        }
    });
}

let timerUserScrolling;
function hideNavBar(){
    document.addEventListener("scroll", () => {
        navMenu.style.display="block";

        if(timerUserScrolling != null){
            clearTimeout(timerUserScrolling)
        }

        if (window.pageYOffset > 50) {
            timerUserScrolling = setTimeout(  () => {
                navMenu.style.display="none";
            }, 1000);
        }
    });
}

// function showButton(){
//     document.addEventListener("scroll", () => {
//
//         if (scrollToTopButton.scrollHeight > 0) {
//             scrollToTopButton.style.display="block";
//         }
//     })
// }

function clickShowButton(){
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

generateNav();
addActiveIfClickNavBar();
addActiveIfInViewport();
hideNavBar();
showButton();
clickShowButton();