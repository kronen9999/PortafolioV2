import { Elements as elements } from './Elements.js';
    var apartadoMenu="Home"; 
document.addEventListener('DOMContentLoaded', function() {

  

    const divPrincipal= this.querySelector(".div_Principal");
    divPrincipal.appendChild(elements.WelcomeMessage());
    setTimeout(() => {
    divPrincipal.style.backdropFilter="blur(25px)";
    divPrincipal.removeChild(divPrincipal.querySelector(".WelcomeMessage"));
    divPrincipal.appendChild(elements.divContenedor());
    document.querySelector(".divContenedor").innerHTML=`<div class='divContenedor_P1'>
    <h2>You can found me on</h2>
    </div>
    <div class='divContenedor_P2'>
    <div class='divInfo'>
    </div>
    <div class='divMenu'>
    </div>
    </div>
    `;
    document.querySelector(".divContenedor_P1").appendChild(elements.ulRedes());
    document.querySelector(".divInfo").appendChild(elements.ELementoHome());
    document.querySelector(".divMenu").appendChild(elements.ulMenu());
    const elementosMenu=document.querySelectorAll(".ulMenu li");
    MenuSeleccion(elementosMenu);
    
    


    },4500);
});

function MenuSeleccion (elementosMenu)
{
    elementosMenu.forEach(elemento => {
        elemento.addEventListener("click",(e)=>{
        for ( let i of elementosMenu)
        {
        if (i == e.target)
        {
            i.setAttribute("seleccion","true");
            apartadoMenu=i.getAttribute("btnMenu");
        }
        else {
            i.setAttribute("seleccion","false");
        }


        }
    SeleccionMenu(apartadoMenu);
        
    });
    
        });  

}

function SeleccionMenu(apartadoMenu)
{

    let divInfo=document.querySelector(".divInfo");

    divInfo.innerHTML="";
    switch(apartadoMenu)
    {
        case "Home":
            divInfo.appendChild(elements.ELementoHome());
            break;
        case "About":
            divInfo.appendChild(elements.ELementoAbout());
            break;
        case "AcHistorial":
            divInfo.appendChild(elements.ElementoAcHistorial());
            break;
        case "Projects":
            alert("Projects");
            break;
        case "Skills":
            alert("Skills");
            break;
        case "Contact":
            alert("Contact");
            break;
    }

}




