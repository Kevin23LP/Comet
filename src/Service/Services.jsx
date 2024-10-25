import React from "react";
import './servicesstyles.css';
import imgdesign from './Ilustración del concepto de equipo de diseño _ Vector Gratis.jpg';
import imgdevelop from './6 Landing Page Optimization Tips to Enhance Customer Experience - LearnWoo.jpg';
import imgasistencia from './Ilustración de concepto de asistencia activa _ Vector Gratis.jpg';

const Services = () => {

    return (
        <div id="servicios" className="how-it-works-container fontpopins">
          <h2>¿Como trabajamos?</h2>
          <div className="steps-container">
            <div className="step">
              <img src={imgdesign} alt="Sign Up" />
              <h3>Diseño UX/UI</h3>
              <p>Creamos el prototipo de tu aplicacion Web utilizando Figma.</p>
            </div>
            <div className="step">
              <img src={imgdevelop} alt="Add Bank Account" />
              <h3>Desarrollo Full-Stack</h3>
              <p>Desarrollamos tu sitio Web tanto el Front-end como el Back-end, en base a tu diseño realizado en figma.</p>
            </div>
            <div className="step">
              <img src={imgasistencia} alt="Start Transacting" />
              <h3>Asistencia 24/7</h3>
              <p>Estamos siempre activos para sacarte cualquier duda, estes donde estes.</p>
            </div>
          </div>
        </div>
      );
}

export default Services