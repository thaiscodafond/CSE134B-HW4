export function savePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  
  export function loadPosts() {
    const postsJSON = localStorage.getItem("posts");
    if (postsJSON) {
      return JSON.parse(postsJSON);
    } else {
      return [];
    }
  }
  