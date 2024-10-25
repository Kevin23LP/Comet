import React from 'react';
import Navall from './Navcontent/Navall';
import Herodiv from './Herodiv/Herodiv';
import Aboutus from './Aboutus/Aboutus';
import Services from './Service/Services';
import Skills from './skills/Skills';
import Footer from './footer/Footer';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    
    <div>
      <Navall />
      <Herodiv />
      <Aboutus />
      <Services />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
