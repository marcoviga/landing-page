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
    document.addEventListener("scroll", function ()  {
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

function hideNavBar(){
    document.addEventListener("scroll", function() {
        let navMenu = document.querySelector(".navbar__menu");
        navMenu.style.display="none";

        setTimeout(function(){
            navMenu.style.display="block";
            }, 10);

    })
}


// function addScrollToSection() {
//     for (let i = 0; i < menuLinks.length; i++) {
//         menuLinks[i].addEventListener("click", function () {
//             console.log('where is the love');
//             console.log(menuLinks[i].className);
//         });
//     }
// }


// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

// Scroll to section on link click

// Set sections as active
generateNav();
addActiveIfClickNavBar();
addActiveIfInViewport();
hideNavBar();