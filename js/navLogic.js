import { postData } from './postData.js';
import { buildHeader } from './buildHeaders.js';
import { buildBody } from './buildBodies.js';
import { empowerPosts } from './postLogic.js';

let nav = document.getElementsByTagName("nav")[0];
let navHeader = document.querySelector("#navHeader");
let navTitle = document.querySelector("#navTitle");
let navButton = document.querySelector("#navButton");
let navButtonText = document.querySelector("#navButtonText");
let navMenu = document.querySelector("#navMenu");
let main = document.getElementsByTagName("main")[0];
let posts = JSON.parse(postData);
let searchBar;
let searchTimeout;


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
    searchBar.addEventListener("input", searchWait, false);
    navMenu.appendChild(searchBar);
}

function searchWait(){
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(()=>searchPosts(),500);
}

function searchPosts() {
    let searchTerm = searchBar.value.toLowerCase();
    let matches = [];
    if(searchTerm.length > 1){
        for(let i=0; i<posts.length; i++){
            if(posts[i].postTitle.toLowerCase().search(searchTerm) > -1){
                matches.push(i);
            }
            for(let j=0; j<posts[i].postBody.length; j++){
                if(posts[i].postBody[j].elementType == "code"){
                    continue;
                }else if(posts[i].postBody[j].content.toLowerCase().search(searchTerm) > -1){
                    matches.push(i);
                }
            }
        }
    }
    let uniqueMatches = [...new Set(matches)];
    updateMain(uniqueMatches);
}

function updateMain(matches){
    main.innerHTML = "";
    for(let i=0; i<matches.length; i++){
        buildHeader(matches[i], posts[matches[i]]);
        buildBody(matches[i], posts[matches[i]].postBody);
        empowerPosts();
    }
}