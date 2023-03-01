import { createPostHTML } from './postHTML.js';
import { savePosts } from './data.js';

export function renderPosts(posts, postList) {
  postList.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    postList.innerHTML += DOMPurify.sanitize(createPostHTML(posts[i], i));
  }
  if (posts.length === 0) {
    postList.innerHTML = "No posts yet";
  }
  savePosts(posts); // Save the updated list of posts to local storage
}
