import React, { useEffect } from "react";
import './aboutstyles.css';
import imgprograming from './rb_106553.png';
import imgart from './rb_5925.png';

const Aboutus = () => {

  useEffect(() => {
    const titulodus = document.querySelector('.elementh1');
    const varelm = document.querySelector('.txtussect');
    const cosas = (entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          titulodus.style.transform = 'translateY(0)';
          varelm.style.transform = 'translateY(0)';
        }else{
          titulodus.style.transform = 'translateY(100px)';
          varelm.style.transform = 'translateY(100px)';
        }
      });
    };
    const observador = new IntersectionObserver(cosas, {});
    if (titulodus) {
      observador.observe(titulodus);

    }
    if (varelm) {
      observador.observe(varelm);
      
    }
    return () => {
      if (titulodus) {
        observador.unobserve(titulodus);
      }
      if (varelm) {
        observador.unobserve(varelm);
      }
    };
  }, []);

  return (
    <div className="mainuscont fontpopins" id="nosotros">
      <div>
        <div className="ustitleh1">
          <h1 className="elementh1">Sobre Nosotros</h1>
        </div>
        <div className="uscontent">
          <div className="imgusdiv">
            <img src={imgprograming} alt="" />
          </div>
          <div className="txtdiv">
            <div className="txtussect">
              <h2>Aumenta tu visibilidad <span>ONLINE</span></h2>
            </div>
            <div className="pusdiv">
              <p>Somos un Team Argentino de jóvenes entusiastas, apasionados por la tecnología moderna. Nos especializamos en el desarrollo de aplicaciones web, combinando nuestra visión fresca y nuestras habilidades técnicas para crear soluciones innovadoras y efectivas. Cada proyecto es una oportunidad para mostrar nuestro amor por la tecnología y nuestro compromiso con la excelencia. Juntos, impulsamos el futuro digital, transformando ideas en realidades tangibles.</p>
            </div>
            <div className="cardus">
              <div className="cardusimgdiv">
                <img src={imgart} alt="" />
              </div>
              <div>
                <p>Optá por un diseño moderno, fresco y atractivo para tu sitio, contas con nosotros!</p>
              </div>
              <div className="linkboxus">
                <a className="linkus" href="https://api.whatsapp.com/send/?phone=542215905503&text&type=phone_number&app_absent=0" target="_blank">Ir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
