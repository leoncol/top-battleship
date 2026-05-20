import menu from "./assets/img/bakery-menu.jpg"

function displayMenu(){
    const contentDiv = document.querySelector("#content");

    const bakeryMenu = document.createElement("img");
    bakeryMenu.src = menu;
    
    const title = document.createElement("h1");
    title.innerHTML = "Nuestro menu";
    
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Disfruta de nuestro variado menu";
    

    contentDiv.appendChild(title);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(bakeryMenu);
    
}

export default displayMenu;