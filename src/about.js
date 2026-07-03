export default function createAboutPage() {
    const content = document.getElementById("content");

    const about = document.createElement("div");
    about.classList.add("about");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const description = document.createElement("p");
    description.textContent =
        "We are a modern restaurant focused on high-quality ingredients, sea view atmosphere and unforgettable dining experience.";

    about.appendChild(heading);
    about.appendChild(description);

    content.appendChild(about);
}