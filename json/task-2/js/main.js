const URL_BASE = "https://jsonplaceholder.typicode.com/posts";
const pageOutput = document.querySelector(".output");
const ERROR_MESSAGE = "ERROR!";

function loadPosts() {
    fetch(URL_BASE)
    .then(response => response.json())
    .then(posts => {
       posts.forEach(post => {
           showPost(post)
       }); 
    });
}

function showPost(post) {
    let container = document.querySelector(".posts");

    let heading = document.createElement("h2");
    heading.textContent = post.title;

    let text = document.createElement("p");
    text.textContent = post.body;

    container.appendChild(heading);
    container.appendChild(text);
}

loadPosts();
