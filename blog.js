import { createPostHTML } from "./postHTML.js";
import { loadPosts, savePosts } from "./data.js";
import { renderPosts } from "./render.js";

const postList = document.getElementById("post-list");
const addPostForm = document.getElementById("add-post-form");

let posts = loadPosts();

if (posts.length === 0 && !localStorage.getItem("examplePostsLoaded")) {
  posts = [
    {
      title: "10 Tips for Learning a New Language",
      date: "2022-02-15",
      summary:
        "Learning a new language can be challenging, but with these 10 tips, you'll be well on your way to becoming fluent!",
    },
    {
      title: "The Benefits of Yoga",
      date: "2022-01-25",
      summary:
        "Yoga is more than just exercise - it has many physical and mental benefits that can improve your overall health and well-being.",
    },
    {
      title: "How to Start a Blog",
      date: "2022-02-01",
      summary:
        "Blogging can be a fun and rewarding way to share your thoughts and ideas with the world. Here's how to get started!",
    },
    {
      title: "5 Easy Recipes for Beginner Cooks",
      date: "2022-02-10",
      summary:
        "If you're new to cooking, these 5 easy recipes are perfect for getting started in the kitchen. You'll be a pro in no time!",
    },
  ];
  localStorage.setItem("examplePostsLoaded", "true");
  savePosts(posts);
}

const addPostBtn = document.getElementById("add-post-btn");
addPostBtn.addEventListener("click", function () {
  const title = DOMPurify.sanitize(prompt("Enter the title of your post:"));
  const date = DOMPurify.sanitize(prompt("Enter the date of your post:"));
  const summary = DOMPurify.sanitize(prompt("Enter the summary of your post:"));
  const post = { title, date, summary };
  posts.push(post);
  renderPosts(posts, postList);
  savePosts(posts);
});

postList.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
    const index = event.target.dataset.index;
    const post = posts[index];
    const newTitle = DOMPurify.sanitize(
      prompt("Enter a new title:", post.title)
    );
    const newDate = DOMPurify.sanitize(prompt("Enter a new date:", post.date));
    const newSummary = DOMPurify.sanitize(
      prompt("Enter a new summary:", post.summary)
    );

    posts[index] = {
      title: DOMPurify.sanitize(newTitle),
      date: DOMPurify.sanitize(newDate),
      summary: DOMPurify.sanitize(newSummary),
    };
    renderPosts(posts, postList);
    savePosts(posts);
  } else if (event.target.classList.contains("delete-btn")) {
    const index = event.target.dataset.index;
    posts.splice(index, 1);
    renderPosts(posts, postList);
    savePosts(posts);
  }
});

renderPosts(posts, postList);
