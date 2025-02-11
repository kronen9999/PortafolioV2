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
      <li><a href='https://github.com/kronen9999' target='_blank'><img src='Assets/Images/GitHub.png'></href></li>
      <li><a href='https://stackoverflow.com/users/25022090/steven-camacho-cisneros' target='_blank'><img src='Assets/Images/StackOverflow.png'></href></li>
      <li><a href='https://wa.me/9532407559' target='_blank'><img src='Assets/Images/WhatsApp.png'></href></li>
      <li><a href='https://mx.linkedin.com' target='_blank'><img src='Assets/Images/Linkedin.png'></href></li>
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
                <form id="form">
                <h2>Envíame un mensaje</h2>
                    <input type="text" name="from_name" id="from_name" placeholder="Ingrese su nombre" required>>
                    
                    <input type="email" name="email_id" id="email_id" placeholder="Ingrese su correo electrónico" required>
                    
                    <textarea type="text" name="message" id="message" placeholder="Ingrese su mensaje a enviar" required></textarea>
                    
                    <button type="submit" id="button">Enviar Correo</button>
                </form>
            </div>`;
      return divElementoVariado;
      

    }

    static ElementoProyects()
    {
  let divElementoVariado=document.createElement("div");
  divElementoVariado.classList.add("divElementoVariado");
  divElementoVariado.innerHTML=`<h2 class='InfoApartado'>
  Proyectos
  </h2>
  <div class='Projects_Div'>

  <div class='Projects_Div_Proyecto'>
  <h3>Sistema de culturas mesoamricanas (Evaluacion y aplicacion)</h3>
  <div class='Projects_Div_Proyecto_Div'>
  <img src='Assets/Images/Proyecto_Culturas.png'>
  <div class='Projects_Div_Proyecto_Div_Info'>
  <p>Sistema de ayuda en  en el estudio de el tema de las culturas mesoamericanas enfocado a niños de primaria y con la capacidad de evaluar a los alumnos generar un examen y un informe .
  Este  proyecto fue colaborativo</p>
  <div class='Projects_Div_Proyecto_Div_Info_Tecnologias'>
  <img src='Assets/Images/Java.png'>
  </div>
  </div>
  </div> 
  </div>

  <div class='Projects_Div_Proyecto'>
  <h3>Sistema dispensador de productos para la mujer V1</h3>
  <div class='Projects_Div_Proyecto_Div'>
  <img src='Assets/Images/Proyecto_DispensadorV1.png'>
  <div class='Projects_Div_Proyecto_Div_Info'>
  <p>Sistema dispensador de productos para la mujer(software y Hardware)que consistia en un dispensador de productos para la arte fisica 
  y para el sistema el aplicativo de esccritorio.Este proyecto fue colaborativo</p>
  <div class='Projects_Div_Proyecto_Div_Info_Tecnologias'>
  <img src='Assets/Images/Java.png'>
  <img src='Assets/Images/Arduino.png'>
  <img src='Assets/Images/Mysql.png'>
  </div>
  </div>
  </div> 
  </div>

<div class='Projects_Div_Proyecto'>
  <h3>Sistema dispensador de productos para la mujer v2</h3>
  <div class='Projects_Div_Proyecto_Div'>
  <img src='Assets/Images/Proyecto_DispensadorV2.png'>
  <div class='Projects_Div_Proyecto_Div_Info'>
  <p>Proyecto de el sistema dispensador cuyo hardware se modifico por un prototipo mas sofisticado y se migraron tecnologias Java-C# y MySql-SQL.Este proyecto fue colaborativo</p>
  <div class='Projects_Div_Proyecto_Div_Info_Tecnologias'>
  <img src='Assets/Images/CS.png'>
  <img src='Assets/Images/Arduino.png'>
  <img src='Assets/Images/Sql.png'>
  </div>
  </div>
  </div> 
  </div>

  <div class='Projects_Div_Proyecto'>
  <h3>Mochila gps para niños de preescolar</h3>
  <div class='Projects_Div_Proyecto_Div'>
  <img src='Assets/Images/MochilaGPS.jpg'>
  <div class='Projects_Div_Proyecto_Div_Info'>
  <p>Proyecto colaborativo que consiste en integrar en una mochila para niños un sensor gps para su monitoreo y rastreo,se utilizo una placa esp8266,conexiones a base de datos y aplicacion en Kodular</p>
  <div class='Projects_Div_Proyecto_Div_Info_Tecnologias'>
  <img src='Assets/Images/php.png'>
  <img src='Assets/Images/Arduino.png'>
  <img src='Assets/Images/Mysql.png'>
  </div>
  </div>
  </div> 
  </div>

    <div class='Projects_Div_Proyecto'>
  <h3>Bolsa de trabajo para el Itsao</h3>
  <div class='Projects_Div_Proyecto_Div'>
  <img src='Assets/Images/BolsaTrabajo.png'>
  <div class='Projects_Div_Proyecto_Div_Info'>
  <p>Sistema web para el Itsao con la finalidad de ofrecer una plataforma de trabajo,vacantes y postulacion para los estudiantes del Itsao
  .Proyecto Colaborativo</p>
  <div class='Projects_Div_Proyecto_Div_Info_Tecnologias'>
  <img src='Assets/Images/php.png'>
  <img src='Assets/Images/Html.png'>
  <img src='Assets/Images/Css.png'>
  <img src='Assets/Images/Javascript.png'>
  <img src='Assets/Images/Mysql.png'>
  </div>
  </div>
  </div> 
  </div>

  <div class='Projects_Div_Proyecto'>
  <h3>Sistema gestor de mujeres embarazadas (Enfocado a clinica)</h3>
  <div class='Projects_Div_Proyecto_Div'>
  <img src='Assets/Images/SistemaME.png'>
  <div class='Projects_Div_Proyecto_Div_Info'>
  <p>Sistema web para gestionar clinicas,doctores,y muejeres embarazadas,para analizar brindar consultas y obtener informacion respecto al embarazo.Proyecto colaborativo</p>
  <div class='Projects_Div_Proyecto_Div_Info_Tecnologias'>
  <img src='Assets/Images/php.png'>
  <img src='Assets/Images/Html.png'>
  <img src='Assets/Images/Css.png'>
  <img src='Assets/Images/Javascript.png'>
  <img src='Assets/Images/Mysql.png'>
  </div>
  </div>
  </div> 
  </div>

  </div>`;

  return divElementoVariado;
    }

  }