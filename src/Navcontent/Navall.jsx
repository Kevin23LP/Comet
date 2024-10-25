import React, { useEffect } from "react";
import './navstyles.css';
import menuico from './bx-menu.svg';

const Navall = () => {
  

  useEffect(() => {
    const handleScroll = () => {
      const navmovido = document.querySelector('.navallmenu');
      if (navmovido) {
        if (window.scrollY > 0) {
          navmovido.classList.add('navinmove');
          navmovido.classList.add('movilenav');
        }else{
          navmovido.classList.remove('navinmove')
          navmovido.classList.remove('movilenav');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navallmenu fontpopins">
      <div className="logonav">
        <a className="fontpopins" href="#">Comet</a>
      </div>
      <div className="menuboxnav"><img src={menuico} alt="" /></div>
      <div className="linksnavdiv">
        <li>
          <a className="navlink" href="#nosotros">Sobre Nosotros</a>
        </li>
        <li>
          <a className="navlink" href="#servicios">Servicios</a>
        </li>
        <li>
          <a className="navlink" href="#tecnos">Skills</a>
        </li>
        <li>
          <a className="navcta" href="https://api.whatsapp.com/send/?phone=542215905503&text&type=phone_number&app_absent=0" target='__blank'>Contactar</a>
        </li>
      </div>
    </div>
  );
}

export default Navall;
