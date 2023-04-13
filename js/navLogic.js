let navTitle = document.querySelector("#navTitle");

export let empowerNav = function() {
    navTitle.addEventListener("click", goHome, false);
}

function goHome() {
    navTitle.classList.add("depressed");
    window.location.href = "http://www.tyshinkle.blog";
}