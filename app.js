const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = documment.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

var mapList = ["Fort Polk, Louisiana", "Boston, Massachusetts", "Diamond Bar, California", "Fort Drum, New York", "Denver, Colorado", "Daegu, South Korea", "Olympia, Washington", "Cape Town, South Africa", "Toledo, Ohio", "Tacoma, Kansas", "Pyeongtaek, South Korea"];
var time = 3000;
var splitTime = 500;
var i = 0;
let map__list = document.getElementById("map__list");
var text = "I'm from ";
let result = text.fontcolor("white");
const period = "."
let result2 = period.fontcolor("white");
function changeWord() {
    map__list.innerHTML = result + "{ " + mapList[i] + " }" + result2;

    if (i < mapList.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeWord()", time);
}

window.onload = changeWord;

// Show active menu when scrolling
const highLightMenu = () => {
    const elem = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skills-page');
    const experiencesMenu = document.querySelector('#experiences-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactsMenu = document.querySelector('#contacts-page');
    let scrollPos = window.scrollY;

    // adds 'highlight class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        aboutMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        return 
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        skillsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        experiencesMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2500) {
        experiencesMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        projectsMenu.classList.add('highlight');
        experiencesMenu.classList.remove('highlight');
        contactsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 3200) {
        contactsMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return
    }
}

if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);