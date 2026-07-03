export default function createMenuPage() {
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const dishes = [
        {
            name: "Grilled Seafood Platter",
            desc: "Fresh seafood with herbs and lemon.",
            img: "https://images.unsplash.com/photo-1604908177522-040f1aebad3a"
        },
        {
            name: "Steak Deluxe",
            desc: "Perfectly grilled beef steak with sauce.",
            img: "https://images.unsplash.com/photo-1558030006-450675393462"
        },
        {
            name: "Pasta Carbonara",
            desc: "Classic Italian creamy pasta.",
            img: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb"
        }
    ];

    menu.appendChild(heading);

    dishes.forEach(dish => {
        const card = document.createElement("div");
        card.classList.add("dish");

        const img = document.createElement("img");
        img.src = dish.img;
        img.alt = dish.name;

        const title = document.createElement("h3");
        title.textContent = dish.name;

        const desc = document.createElement("p");
        desc.textContent = dish.desc;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);

        menu.appendChild(card);
    });

    content.appendChild(menu);
}