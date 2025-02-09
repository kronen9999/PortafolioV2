import { Elements as elements } from './Elements.js';

document.addEventListener('DOMContentLoaded', function() {

    const divPrincipal= this.querySelector(".div_Principal");
    divPrincipal.appendChild(elements.WelcomeMessage());
    setTimeout(() => {
    divPrincipal.style.backdropFilter="blur(25px)";
    divPrincipal.removeChild(divPrincipal.querySelector(".WelcomeMessage"));
    divPrincipal.appendChild(elements.divContenedor());
    document.querySelector(".divContenedor").innerHTML=`<div class='divContenedor_P1'>
    <h2>Found me on</h2>
    </div>
    <div class='divContenedor_P2'>
    </div>
    `;
    document.querySelector(".divContenedor_P1").appendChild(elements.ulRedes());
    },4500);



    
    
    

});