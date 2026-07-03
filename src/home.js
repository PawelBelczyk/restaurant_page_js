import indoor from "./images/indoor.jpg"



export default function createHomePage() {
    const content = document.getElementById("content");

    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Fine Dining Experience";

    const description = document.createElement("p");
    description.textContent = "Luxury restaurant near the sea with fresh ingredients and modern cuisine.";

    const img = document.createElement("img");
    img.src = indoor;
    img.alt = "Restaurant interior";

    home.appendChild(heading);
    home.appendChild(description);
    home.appendChild(img);

    content.appendChild(home);
}