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
      <li seleccion='false' btnMenu='About'>About</li>
      <li seleccion='false' btnMenu='AcHistorial'>Academic Historial</li>
      <li seleccion='false' btnMenu='Projects'>Projects</li>
      <li seleccion='false' btnMenu='Skills'>Skills</li>
      <li seleccion='false' btnMenu='Contact'>Contact</li>
    `;
    return ulMenu;
    }

    static ELementoHome()
    {
      let divElementoHome=document.createElement("div");
      divElementoHome.classList.add("ElementoHome");
      divElementoHome.innerHTML=`
      <h1 class='Home_Title'>Hi i am steven </h1>
      <h2 class='Home_Description'>Welcome to my portfolio</h2>
    `;
    return divElementoHome;
    }

    static ELementoAbout()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
      About me
      </h2>
      <div class='AboutMe_Div'>
      <p>Hi,My name is Steven Camacho Cisneros.Just now i am a
       student of the informatics Engineering career in the Instituto
       Tecnologico Superior of Acatlan de Osorio </p>
      </div>
    `;
    return divElementoVariado;
    }

    static ElementoAcHistorial()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
      Academic Historial
      </h2>
      <div class='AcHistorial_Div'>
      <p>Preschool:Bertha von GLumer</p>
      <p>↓</p>
      <p>Primary: Carlos A Carrillo</p>
      <p>↓</p>
      <p>Secondary: Escuela Secundaria Técnica No27</p>
      <p>↓</p>
      <p>Preparatory: Emsad 38 Tezoatlan</p>
      <p>↓</p>
      <p>University: Instituto Tecnologico Superior de Acatlan de Osorio</p>
      </div>
    `;
    return divElementoVariado;
    }

    static ElementoSkills ()
    {
      let divElementoVariado=document.createElement("div");
      divElementoVariado.classList.add("divElementoVariado");
      divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
      Skills
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

 }