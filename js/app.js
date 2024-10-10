let navbar = document.createElement("nav");
let container = document.createElement("div");
let logo = document.createElement("a");
let addBookBtn = document.createElement("button");
let addBtnicon = document.createElement("i");

navbar.appendChild(container);
container.appendChild(logo);
container.appendChild(addBookBtn);
addBookBtn.appendChild(addBtnicon);
document.body.appendChild(navbar);

navbar.classList.add("navbar", "bg-body-tertiary");
container.classList.add("container");
logo.classList.add("navbar-brand", "h1", "my-0");
addBookBtn.classList.add("btn", "btn-outline-secondary", "rounded");
addBtnicon.classList.add("bi", "bi-plus-circle-fill");

logo.innerText = "Note Book";
