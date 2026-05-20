import FacebookIcon from "./assets/img/fb-icon.svg"
import InstagramIcon from "./assets/img/ig-icon.png"
import WhatsappIcon from "./assets/img/wp-icon.png"

function displayAbout(){
    const contentDiv = document.querySelector("#content");

    const title = document.createElement("h1");
    title.innerHTML = "Informacion de contacto";
    
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Presiona los iconos para acceder a nuestras redes sociales.";

    const icons = document.createElement("div");
    icons.id = "#icons";

    const facebookIcon = document.createElement("img");
    facebookIcon.src = FacebookIcon;
    facebookIcon.className = "icon";

    const instagramIcon = document.createElement("img");
    instagramIcon.src = InstagramIcon;
    instagramIcon.className = "icon";

    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = WhatsappIcon;
    whatsappIcon.className = "icon";


    const facebookIconLink = document.createElement("a");
    facebookIconLink.href = "https://www.facebook.com/ricopanbuga";
    facebookIconLink.target = "_blank";

    const instagramIconLink = document.createElement("a");
    instagramIconLink.href = "https://www.instagram.com/ricopanbuga/";
    instagramIconLink.target = "_blank";

    const whatsappIconLink = document.createElement("a");
    whatsappIconLink.href = "https://api.whatsapp.com/send?phone=573178165082&text=Hola%2C%20%F0%9F%98%8A%20me%20gustaria%20realizar%20un%20pedido%3A";
    whatsappIconLink.target = "_blank";

    facebookIconLink.appendChild(facebookIcon);
    instagramIconLink.appendChild(instagramIcon);
    whatsappIconLink.appendChild(whatsappIcon);

    icons.appendChild(facebookIconLink);
    icons.appendChild(instagramIconLink);
    icons.appendChild(whatsappIconLink);

    

    contentDiv.appendChild(title);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(icons);
    
}

export default displayAbout;