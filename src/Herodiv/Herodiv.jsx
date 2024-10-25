import React from "react";
import './herostyles.css';
import imgwasap from './bxl-whatsapp.svg';

const Herodiv = () => {

    return (
        <div className="heroconteiner fontpopins">
            <div className="h3divhero">
                <h5>
                    ¡Demos juntos el siguiente paso!
                </h5>
            </div>
            <div className="h1divhero">
                <h1>
                    Desarrollamos tu Sitio Web <br /> <span className="h1spanised">Full-Stack</span>
                </h1>
            </div>
            <div className="pdivhero">
                <p>Con un enfoque integral que abarca SEO, marketing en redes sociales y diseño web, aseguramos que tu marca no solo destaque, sino que también crezca y prospere en el competitivo mercado digital. 🚀✨</p>
            </div>
            <div className="linkshero">
                <div>
                    <a className="herocta1 bggreen" href="https://api.whatsapp.com/send/?phone=542215905503&text&type=phone_number&app_absent=0" target="__blank">Contratar</a>
                </div>
                <div>
                    <a className="herocta2" href="#tecnos">Explorar Sitio</a>
                </div>
            </div>
            <div className="wasapico">
                <a href="https://api.whatsapp.com/send/?phone=542215905503&text&type=phone_number&app_absent=0" target="__blank"> <img src={imgwasap} alt="" /></a>
            </div>
        </div>
    );
}
export default Herodiv