export function createPostHTML(post, index) {
    return `
      <li>
        <h2>${post.title}</h2>
        <p><em>${post.date}</em></p>
        <p>${post.summary}</p>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </li>
    `;
  }
  