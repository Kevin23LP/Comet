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
        } else {
          navmovido.classList.remove('navinmove');
          navmovido.classList.remove('movilenav');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const icoboxm = document.querySelector('.menuboxnav');
    const navdivnew = document.querySelector('.navboxmenuactive');
    
    const handleMenuClick = () => {
      if (navdivnew) {
        navdivnew.classList.toggle('menuonwindow');
      }
    };

    if (icoboxm) {
      icoboxm.addEventListener('click', handleMenuClick);
    }

    return () => {
      if (icoboxm) {
        icoboxm.removeEventListener('click', handleMenuClick);
      }
    };
  }, []);

  return (
    <div>
      <div className="navallmenu fontpopins">
        <div className="logonav">
          <a className="fontpopins" href="#">Comets</a>
        </div>
        <div className="menuboxnav">
          <img src={menuico} alt="" />
        </div>
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
            <a className="navcta" href="https://api.whatsapp.com/send/?phone=542215905503&text&type=phone_number&app_absent=0" target='_blank'>Contactar</a>
          </li>
        </div>
      </div>
      <div className="navboxmenuactive fontpopins">
        <div>
          <a href="#nosotros">Sobre Nosotros</a>
        </div>
        <div>
          <a href="#servicios">Servicios</a>
        </div>
        <div>
          <a href="#tecnos">Skills</a>
        </div>
        <div>
          <a className="btnonwindowdiv" href="https://api.whatsapp.com/send/?phone=542215905503&text&type=phone_number&app_absent=0">Contactar</a>
        </div>
      </div>
    </div>
  );
}

export default Navall;
