import React from 'react';
import '../styles/Contact.css';
import Fondo2 from '../assets/Rectanglepurple.png';
import FooterComponent from '../components/container/FooterComponent';

const Contact = () => {
  return (
    <div>
      <div className="responsiveContactContainer">
        <h1 className="contacTitle">¡Contáctanos!</h1>
        <img src={Fondo2} alt="" className="fondo3" />
        <div className="containerContact p-5">
          <a
            href="https://donaronline.org/banco-de-alimentos-balcarce-asociacion-civil/menos-hambre-mas-futuro"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            Donar Online
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=542266448249&text=¡Hola!%20Me%20gustaría%20recibir%20la%20ayuda%20del%20BDA"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            Área Social - Asistencia BDA
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=542266446438&text=¡Hola!%20Quiero%20colaborar%20con%20el%20BDA%20"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            Whatsapp BDA
          </a>
          <a
            href="https://www.instagram.com/bancodealimentosbalcarce/"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            Instagram BDA
          </a>
          <a
            href="https://www.linkedin.com/company/banco-de-alimentos-balcarce/"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            LinkedIn BDA
          </a>
          <a
            href="https://www.facebook.com/bdabalcarce"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            Facebook BDA
          </a>
        </div>
      </div>

      <div className="footer-participate">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Contact;
