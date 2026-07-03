export default function createHomePage() {
    const content = document.getElementById("content");

    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "My Restaurant";

    const description = document.createElement("p");
    description.textContent = "Best food in the World";

    home.appendChild(heading);
    home.appendChild(description);

    content.appendChild(home);
}