let main = document.getElementsByTagName("main")[0];

//loadPostHeaders
export function buildHeader(postIndex, postData){
    addPostContainers(postIndex);
    addTitle(postIndex, postData.postTitle);
    addTags(postIndex, postData.postTags);
    addDate(postIndex, postData.postDate);
    setMaxHeight(postIndex);
}

function addPostContainers(postIndex){
    let postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.setAttribute("id", "post" + postIndex);
    let postTitleContainer = document.createElement("div");
    postTitleContainer.classList.add("postTitleContainer");
    postTitleContainer.setAttribute("id", "postTitleContainer" + postIndex);
    postContainer.appendChild(postTitleContainer);
    main.appendChild(postContainer);
}

function addTitle(postIndex, postTitleText){
    let targetDiv = document.querySelector("#postTitleContainer" + postIndex);
    let postTitle = document.createElement("div");
    postTitle.classList.add("postTitle");
    postTitle.classList.add("raised");
    postTitle.setAttribute("id", "postTitle" + postIndex);
    let postTitleTextContainer = document.createElement("h1");
    postTitleTextContainer.textContent = postTitleText;
    postTitle.postIndex = postIndex;
    postTitle.open = false;
    postTitle.appendChild(postTitleTextContainer);
    targetDiv.appendChild(postTitle);
}

function addTags(postIndex, postTagText) {
    let targetDiv = document.querySelector("#postTitle" + postIndex);
    let postTags = document.createElement("div");
    postTags.classList.add("postTags");
    for(let i=0; i<postTagText.length; i++){
        let s = document.createElement("div");
        s.classList.add("postTag");
        s.textContent = postTagText[i];
        if(!(i==postTagText.length-1)){
            s.classList.add("tagMargin");
        }
        postTags.appendChild(s);
    }
    targetDiv.appendChild(postTags);
}

function addDate(postIndex, postDateText) {
    let targetDiv = document.querySelector("#postTitle" + postIndex);
    let postDate = document.createElement("div");
    postDate.textContent = postDateText;
    targetDiv.appendChild(postDate);
}

function setMaxHeight(postIndex) {
    let post = document.querySelector("#post" + postIndex);
    let postTitleContainer = document.querySelector("#postTitleContainer" + postIndex);
    post.style.maxHeight = postTitleContainer.offsetHeight + "px";
}