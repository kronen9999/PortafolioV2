 export class Elements
 {

    static WelcomeMessage()
    {
     let textMessage=document.createElement("h1");
     textMessage.textContent="Welcome";
     textMessage.classList.add("WelcomeMessage");
     return textMessage;
    }

    static divContenedor()
    {
      let divContenedor=document.createElement("div");
      divContenedor.classList.add("divContenedor");
      return divContenedor;
    }

    static ulRedes()
    {
      let ulRedes= document.createElement("ul");
      ulRedes.classList.add("ulRedes");
      ulRedes.innerHTML=`
      <li><a href=''><img src='Assets/Images/GitHub.png'></href></li>
      <li><a href=''><img src='Assets/Images/StackOverflow.png'></href></li>
      <li><a href=''><img src='Assets/Images/WhatsApp.png'></href></li>
      <li><a href=''><img src='Assets/Images/Linkedin.png'></href></li>
    `;
      return ulRedes;
    }


 }