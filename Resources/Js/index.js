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
    <h2>Mis redes sociales</h2>
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
           divInfo.appendChild(elements.ElementoProyects());
            break;
        case "Skills":
            divInfo.appendChild(elements.ElementoSkills());
            dinamismoSkills();
            break;
        case "Contact":
            divInfo.appendChild(elements.ElementoContact());
            setupContactForm();
            break;
    }

}

function dinamismoSkills() {
    let imagenesSkills = document.querySelectorAll(".Skills_Div_1_Skill img,.Skills_Div_2 img");
    imagenesSkills.forEach(imagen => {
        let tiempoRandom = Math.floor(Math.random()*(1-4)+1);

        imagen.style.animationDelay = `${tiempoRandom}s`;
       
    });
}

function setupContactForm() {
    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Sending...';
    
       const serviceID = 'default_service';
       const templateID = 'template_cpqagp7';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Correo enviado correctamente gracias por contactarme');
          this.reset(); 
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
}
