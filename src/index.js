import "./styles.css";
import displayHome from "./home";
import displayMenu from "./menu"
import displayAbout from "./about";


function buttons() {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const aboutButton = document.querySelector("#about-button");

    homeButton.addEventListener("click", changePage);
    menuButton.addEventListener("click", changePage);
    aboutButton.addEventListener("click", changePage);
};

function wipePage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';
}

function loadNewPage(button) {
    switch(button.id){
        case "home-button":
            displayHome();
            break;
        case "menu-button":
            displayMenu();
            break;
        case "about-button":
            displayAbout();
            break;
    }
}

function changePage(event) {
    wipePage();
    loadNewPage(event.target);
}

displayHome();
buttons();




console.log("We're live!");


