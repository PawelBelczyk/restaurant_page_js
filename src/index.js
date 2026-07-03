import "./style.css";

import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

console.log("Restaurant app 🚀");

function render(pageFunction) {
    const content = document.getElementById("content");
    content.innerHTML = "";
    pageFunction();
}

function setActive(activeButton) {
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function createButton(text, pageFunction) {
    const button = document.createElement("button");
    button.textContent = text;

    button.addEventListener("click", () => {
        if (button.classList.contains("active")) return;

        setActive(button);
        render(pageFunction);
    });

    return button;
}

// NAV
const nav = document.createElement("nav");

const homeButton = createButton("Home", createHomePage);
const menuButton = createButton("Menu", createMenuPage);
const aboutButton = createButton("About", createAboutPage);

nav.appendChild(homeButton);
nav.appendChild(menuButton);
nav.appendChild(aboutButton);

document.body.appendChild(nav);

// START
render(createHomePage);
setActive(homeButton);