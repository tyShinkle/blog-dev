let postContainers = document.getElementsByClassName("post");
let postHeaders = document.getElementsByClassName("postTitle");
let postHeaderContainers = document.getElementsByClassName("postTitleContainer");
let postBodies = document.getElementsByClassName("postContentContainer");

export let empowerPosts = function() {
    for(let i=0; i<postContainers.length; i++){
        postHeaders[i].addEventListener("click", toggle, false);
    }
}

function toggle(e) {
    let targetIndex = e.currentTarget.postIndex;
    let open = e.currentTarget.open;
    if(!open){
        postContainers[targetIndex].style.maxHeight = postHeaderContainers[targetIndex].offsetHeight + postBodies[targetIndex].offsetHeight + "px";
        postHeaders[targetIndex].classList.add("depressed");
        e.currentTarget.open = true;
    }
    else{
        postContainers[targetIndex].style.maxHeight = postHeaderContainers[targetIndex].offsetHeight + "px";
        postHeaders[targetIndex].classList.remove("depressed");
        e.currentTarget.open = false;
    }
}