import logo from "./assets/img/logo.png"

function displayHome(){
    const contentDiv = document.querySelector("#content");

    const logoSrc = document.createElement("img");
    logoSrc.src = logo;
    
    const title = document.createElement("h1");
    title.innerHTML = "Rico Pan";
    
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Productos frescos, variados y de excelente calidad. Servicio a domicilio por WhatsApp y llamadas disponible.";
    

    contentDiv.appendChild(title);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(logoSrc);
    
}

export default displayHome;