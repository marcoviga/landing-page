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
const sections = document.querySelectorAll(".navbar__section");

/**
 * End Global Variables
 * Start Helper Functions
*/


/**
 * End Helper Functions
 * Begin Main Functions
*/
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

function addActiveSections() {
    const menu__links = document.getElementsByClassName("menu__link");
    for (let i = 0; i < menu__links.length; i++) {
        menu__links[i].addEventListener("click", function () {
            let currentActive = document.getElementsByClassName("active");
            if (currentActive.length > 0) {
                currentActive[0].className = currentActive[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}


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
addActiveSections();
