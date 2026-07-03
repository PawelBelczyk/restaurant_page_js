
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

console.log("Webpack działa 🚀");



const nav =document.createElement("nav");



const menu = document.createElement("button");
menu.textContent ="Menu";
 

menu.addEventListener("click", () => {
    createMenuPage()
});


const about = document.createElement("button");
about.textContent ="About";
 
about.addEventListener("click", () => {
    createAboutPage()
});

const home = document.createElement("button");
home.textContent="Home";
 
home.addEventListener("click", () => {
    createHomePage()
});

nav.appendChild(home);
nav.appendChild(about);
nav.appendChild(menu);

document.body.appendChild(nav);



createHomePage();
