let nav = document.getElementsByTagName("nav")[0];
let navHeader = document.querySelector("#navHeader");
let navTitle = document.querySelector("#navTitle");
let navButton = document.querySelector("#navButton");
let navButtonText = document.querySelector("#navButtonText");
let navMenu = document.querySelector("#navMenu");
let searchBar;


export let empowerNav = function() {
    nav.style.maxHeight = navHeader.offsetHeight + "px";
    buildMenu();
    navTitle.addEventListener("click", goHome, false);
    navButton.addEventListener("click", toggleNav, false);
    navButton.pressed = false;
}

function goHome() {
    navTitle.classList.add("depressed");
    window.location.href = "http://www.tyshinkle.blog";
}

function toggleNav() {
    if(!navButton.pressed) {
        navButton.classList.add("depressed");
        navButtonText.textContent = "-";
        navButton.pressed = true;
        nav.style.maxHeight = navHeader.offsetHeight + navMenu.offsetHeight + "px";
    }
    else {
        navButton.classList.remove("depressed");
        navButtonText.textContent = "+";
        navButton.pressed = false;
        nav.style.maxHeight = navHeader.offsetHeight + "px";
    }
}

function activeSearch(){
    searchBar.classList.add("depressed");
}

function inactiveSearch(){
    searchBar.classList.remove("depressed");
}

function buildMenu() {
    searchBar = document.createElement("input");
    searchBar.classList.add("raised");
    searchBar.addEventListener("focusin", activeSearch, false);
    searchBar.addEventListener("focusout", inactiveSearch, false);
    searchBar.setAttribute("id", "searchBar");
    searchBar.placeholder = "Search...";
    navMenu.appendChild(searchBar);
}