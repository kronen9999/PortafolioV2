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

    static ulMenu()
    {
      let ulMenu= document.createElement("ul");
      ulMenu.classList.add("ulMenu");
      ulMenu.innerHTML=`
      <li seleccion='true' btnMenu='Home'>Home</li>
      <li seleccion='false' btnMenu='About'>Sobre mi</li>
      <li seleccion='false' btnMenu='AcHistorial'>Historial Academico</li>
      <li seleccion='false' btnMenu='Projects'>Proyectos</li>
      <li seleccion='false' btnMenu='Skills'>Habilidades</li>
      <li seleccion='false' btnMenu='Contact'>Contacto</li>
    `;
    return ulMenu;
    }

    static ELementoHome()
    {
      let divElementoHome=document.createElement("div");
      divElementoHome.classList.add("ElementoHome");
      divElementoHome.innerHTML=`
      <h1 class='Home_Title'>Hola soy Steven</h1>
      <h2 class='Home_Description'>Bienvenido(a) a mi portafolio</h2>
    `;
    return divElementoHome;
    }

    static ELementoAbout()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
      Sobre mi
      </h2>
      <div class='AboutMe_Div'>
      <p>Hola me llamo Steven Camacho Cisneros,Soy un estudiante de el 
      Instituto Superior de Acatlan de Osorio,soy una persona apasionada por el 
      desarrollo de software y la programacion.</p>
      </div>
    `;
    return divElementoVariado;
    }

    static ElementoAcHistorial()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
      Historial Academico
      </h2>
      <div class='AcHistorial_Div'>
      <p>Preescolar:Bertha von GLumer</p>
      <p>↓</p>
      <p>Primaria: Carlos A Carrillo</p>
      <p>↓</p>
      <p>Secondaria: Escuela Secundaria Técnica No27</p>
      <p>↓</p>
      <p>Bachillerato: Emsad 38 Tezoatlan</p>
      <p>↓</p>
      <p>Universidad: Instituto Tecnologico Superior de Acatlan de Osorio</p>
      </div>
    `;
    return divElementoVariado;
    }

    static ElementoSkills ()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
      Habilidades
      </h2>
      <div class='Skills_Div'>
      <div class='Skills_Div_1'>

      <div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/Android.png'>
      <p>ANDROID</p>
      </div>

      <div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/CS.png'>
      <p>C#</p>
      </div>

      <div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/Git.png'>
      <p>GIT</p>
      </div>
     
      <div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/Java.png'>
      <p>JAVA</p>
      </div>

       <div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/Kotlin.png'>
      <p>KOTLIN</p>
      </div>


<div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/php.png'>
      <p>PHP</p>
      </div>

      <div class='Skills_Div_1_Skill'>
      <img src='Assets/Images/React.png'>
      <p>REACT</p>
      </div>

      </div>
      <div class='Skills_Div_2'>

       <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Arduino.png'>
      <p>ARDUINO</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Css.png'>
      <p>CSS</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Html.png'>
      <p>HTML</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Javascript.png'>
      <p>JAVASCRIPT</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Laravel.png'>
      <p>LARAVEL</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Mysql.png'>
      <p>Mysql</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Python.png'>
      <p>Python</p>
      </div>

      <div class='Skills_Div_2_Skill'>
      <img src='Assets/Images/Sql.png'>
      <p>SQL</p>
      </div>

      </div>
      </div>
    `;
    return divElementoVariado;
    }

    static ElementoContact()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>Contacto</h2>
            <div class='Contacto_Div'>
                <h2>Envíame un mensaje</h2>
                <form id="contactForm" action="https://formsubmit.co/stacica22eneronkio@gmail.com" method="POST">
                <h2>Envíame un mensaje</h2>
                    <input type="text" id="name" name="name" placeholder="Ingrese su nombre" required>
                    
                    
                    <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required>
                    
                    <textarea id="message" name="message" placeholder="Ingrese su mensaje a enviar" required></textarea>
                    
                    <button type="submit">Enviar Correo</button>
                </form>
                <div id="formMessage"></div>
            </div>`;
      return divElementoVariado;
      

    }

  }