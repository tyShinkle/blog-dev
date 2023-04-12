export let buildBody = function(postIndex, postBody) {
    let postContainer = document.querySelector("#post" + postIndex);
    let postContentContainer = document.createElement("div");
    postContentContainer.classList.add("postContentContainer");
    let postContent = document.createElement("div");
    postContent.classList.add("postContent");
    postContent.setAttribute("id", "postContent" + postIndex);
    for(let i=0; i<postBody.length; i++){
        let childToBe = buildElement(postBody[i]);
        postContent.appendChild(childToBe);
    }
    postContent.classList.add("depressed");
    postContentContainer.appendChild(postContent);
    postContainer.appendChild(postContentContainer);
}

function buildElement(postElement) {
    switch(postElement.elementType){
        case "heading":
            return buildHeading(postElement);
        case "paragraph":
            return buildParagraph(postElement);
        case "code":
            return buildCode(postElement);
        default:
            console.log("An element could not be built in buildBodes.js");
    }
}

function buildHeading(postElement) {
    let elToReturn = document.createElement("h2");
    elToReturn.textContent = postElement.content;
    return elToReturn;
}

function buildParagraph(postElement) {
    let elToReturn = document.createElement("p");
    elToReturn.textContent = postElement.content;
    return elToReturn;
}

function buildCode(postElement) {
    let codeContainer = document.createElement("div");
    let codeBody = document.createElement("div");
    codeContainer.classList.add("codeContainer");
    codeBody.classList.add("codeBody");
    for(let i=0; i<postElement.content.length; i++){
        if(postElement.content[i].type == "newLine"){
            codeBody.appendChild(document.createElement("br"));
        }
        else if(postElement.content[i].type == "indentation"){
            let indentSpan = document.createElement("span");
            indentSpan.classList.add("indentation");
            codeBody.appendChild(indentSpan);
        }
        else{
            let s = document.createElement("span");
            s.textContent = postElement.content[i].content;
            s.classList.add(postElement.content[i].type);
            codeBody.appendChild(s);
        }
    }
    codeContainer.appendChild(codeBody);
    return codeContainer;
}