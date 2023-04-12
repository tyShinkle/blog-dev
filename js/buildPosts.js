import { postData } from "./postData.js";
import { buildHeader } from "./buildHeaders.js";
import { buildBody } from "./buildBodies.js";

let posts = JSON.parse(postData);

export let buildPosts = function() {
    for(let i=0; i<posts.length; i++){
        buildHeader(i, posts[i]);
        buildBody(i, posts[i].postBody);
    }
}