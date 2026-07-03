

    function createHomePage() {

    
        
        const home = document.createElement("div");
        home.classList.add("home");
        
        const heading = document.createElement("h1");
        heading.textContent = "My restaurant *** ***";
 
        const description = document.createElement("p");
        description.textContent ="Best food in the World";
 
        const button = document.createElement("button");
        button.textContent = "Order now";
    
    
        home.appendChild(heading);
        home.appendChild(description);
        home.appendChild(button);
    
        content.appendChild(home);

    };

    export default createHomePage
 