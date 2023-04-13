import { buildPosts } from "./buildPosts.js";
import { empowerPosts } from "./postLogic.js";
import { empowerWindow } from "./windowLogic.js";
import { empowerNav } from "./navLogic.js";

buildPosts();
empowerPosts();
empowerNav();
empowerWindow();