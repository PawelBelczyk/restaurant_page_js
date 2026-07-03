export default function createMenuPage() {
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const description = document.createElement("p");
    description.textContent = "Our best dishes await you.";

    menu.appendChild(heading);
    menu.appendChild(description);

    content.appendChild(menu);
}