let navTitle = document.querySelector("#navTitle");
let navButton = document.querySelector("#navButton");

export let empowerNav = function() {
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
        navButton.pressed = true;
    }
    else {
        navButton.classList.remove("depressed");
        navButton.pressed = false;
    }
}