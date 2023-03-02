import { loadPosts, savePosts } from "./data.js"; //Store into local storage
import { renderPosts } from "./render.js"; //Render the post after binding and stocking

const postList = document.getElementById("post-list");
const addPostForm = document.getElementById("add-post-form");

let posts = loadPosts();

if (posts.length === 0 && !localStorage.getItem("examplePostsLoaded")) { //Initial posts with if (to know if we already opened up the page)
  posts = [                                                              //So that it stays the same when it refreshes
    {
      title: "Just arrived in America",
      date: "2022-01-01",
      summary:
        "Wow can't believe I'm staying two quarters at UCSD ! I hope I become fluent in english. Well I'm supposed to already be fluent but..",
    },
    {
      title: "Sunny San Diego",
      date: "2022-01-07",
      summary:
        "It never stops raining. I don't know why it's called Sunny San Diego.",
    },
    {
      title: "French sadness",
      date: "2022-02-01",
      summary:
        "I miss french pastries. I have not tasted a great croissant in weeks. Also I need some cheese and wine.",
    },
    {
      title: "Trip to LA",
      date: "2022-02-18",
      summary:
        "I spent two days in LA. My favorite part was the Getty Museum because it was beautiful and FREE !",
    },
  ];
  localStorage.setItem("examplePostsLoaded", "true");  //If statement
  savePosts(posts);
}

const addPostBtn = document.getElementById("add-post-btn"); //Add a post and sanitize them
addPostBtn.addEventListener("click", function () {
  const title = DOMPurify.sanitize(prompt("Enter the title of your post:"));
  const date = DOMPurify.sanitize(prompt("Enter the date of your post:"));
  const summary = DOMPurify.sanitize(prompt("Enter the summary of your post:"));
  const post = { title, date, summary };
  posts.push(post);
  renderPosts(posts, postList);
  savePosts(posts);
});

postList.addEventListener("click", function (event) { //Let's edit
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
