import React from 'react';
import './skillsstyles.css';
import imgreact from './png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png';
import imgfigma from './png-transparent-figma-macos-bigsur-icon-thumbnail.png';
import imgadobe from './photoshoplogo.png';
import imghtml from './png-transparent-logo-html-html5.png';
import imgcss from './CSS-Logo.png';
import imgjs from './javalogopng.png';
import imgtail from './tailwindlogotransparent.png';
import imgnode from './Nodejs.png';
import imgsql from './Mysql_logo.png';
import imgseo from './arrow-up-right-dots-solid.svg';
import imgresponsive from './computer_3089248.png';

const Skills = () => {
  return (
    <section id='tecnos' className="desarrollo-web fontpopins">
      <h2>¿Que tecnologias utilizamos?</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={imgfigma} alt="Diseño web personalizado" />
          <img src={imgadobe} alt="Diseño web personalizado" />
          <h3>Diseño web personalizado</h3>
          <p>Creemos interfaces únicas y atractivas para reflejar la identidad de tu marca, capturar la atención de tus visitantes y destacarte entre tu competencia.</p>
        </div>
        <div className="grid-item">
          <img src={imghtml} alt="Desarrollo web de alto rendimiento" />
          <img src={imgcss} alt="Desarrollo web de alto rendimiento" />
          <img src={imgjs} alt="Desarrollo web de alto rendimiento" />
          <img src={imgreact} alt="Desarrollo web de alto rendimiento" />
          <img src={imgnode} alt="Desarrollo web de alto rendimiento" />
          <img src={imgsql} alt="Desarrollo web de alto rendimiento" />
          <img src={imgtail} alt="Desarrollo web de alto rendimiento" />
          <h3>Desarrollo web de alto rendimiento</h3>
          <p>Nuestros desarrolladores web construyen sitios rápidos, seguros y funcionales. Con el foco siempre puesto en brindar una buena experiencia de usuario.</p>
        </div>
        <div className="grid-item">
          <img src={imgseo} alt="Optimización del posicionamiento SEO" />
          <h3>Optimización del posicionamiento (SEO)</h3>
          <p>Mejoramos el posicionamiento de tu website en buscadores con estrategias de SEO. Aumentamos la visibilidad de tu negocio para atraer tráfico de calidad.</p>
        </div>
        <div className="grid-item">
          <img src={imgresponsive} alt="Diseño web responsive" />
          <h3>Diseño web responsive</h3>
          <p>Nuestra prioridad es que tu website se vea y funcione correctamente desde cualquier dispositivo, para ofrecer una experiencia perfecta a todos los usuarios.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
