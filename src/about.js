


function createAboutPage() {

    const content = document.getElementById("content");
    content.innerHTML ="";


    const about = document.createElement("div");
    about.classList.add("about");

    const heading = document.createElement("h2");
    heading.textContent = "Restaurant near the sea";

    const description = document.createElement("p");
    description.textContent = "My restaurant is a very beatiful place near the sea and the mountains, you wish to be here";

about.appendChild(heading);
about.appendChild(description);

content.appendChild(about);
}


export default createAboutPage;