let posts = document.getElementsByClassName("post");
let postHeaderContainers = document.getElementsByClassName("postTitleContainer");
let postHeaders = document.getElementsByClassName("postTitle");
let postBodies = document.getElementsByClassName("postContentContainer");

export let empowerWindow = function() {
    window.addEventListener("resize", resetSizes, false);
}

function resetSizes() {
    for(let i=0; i<posts.length; i++){
        if(postHeaders[i].open){
            posts[i].style.maxHeight = postHeaderContainers[i].offsetHeight + postBodies[i].offsetHeight + "px";
        }
        else{
            posts[i].style.maxHeight = postHeaderContainers[i].offsetHeight + "px";
        }
    }
}