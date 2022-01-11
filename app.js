const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

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

var bttn = document.getElementById("back-to-top");
var body = document.body;
var docElem = document.documentElement;
var offset = 100;
var scrollPos;
var docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = 1;
}

// Add scroll event listener
window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    bttn.className = (scrollPos > offset) ? "visible" : "";
});