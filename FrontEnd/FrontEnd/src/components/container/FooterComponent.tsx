import React from 'react';
import LogoPicture2 from '../../assets/isologotipo2.png';
import Location from '../../assets/Location.png';
import Messsage from '../../assets/Message.png';
import '../../styles/Footer.css';
import SocialBar from '../SocialBar';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="conteFoo">
        <img src={LogoPicture2} alt="" className="logo_Picture" />
        <p className="parrafo-f">
          Trabajamos para reducir el hambre, mejorar la nutrición y evitar el
          desperdicio de alimentos
        </p>
        <div className="menu-footer">
          <h6 className="h6-footer">Menu</h6>
          <Link className="a-footer" to="/home">
            Sobre Nosotros
          </Link>
          <Link className="a-footer" to="/thosewhoparticipate">
            Quienes participan
          </Link>
          <Link className="a-footer" to="/news">
            Novedades
          </Link>
          <Link className="a-footer" to="/contacto">
            Contacto
          </Link>
        </div>
        <div className="sobrenosotros-f">
          <h6 className="h6-footer">Sobre Nosotros</h6>
          <a
            className="location"
            href="https://www.google.com/maps/@-37.857801,-58.2678674,3a,75y,47.11h,84.23t/data=!3m6!1e1!3m4!1sZITpjgbr3moO3GaWU5D8hg!2e0!7i13312!8i6656"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Location} alt="" className="cont-im" />
            Calle 43 c/18 y Av. Centenario. Balcarce, Buenos Aires.
          </a>
          <div className="location">
            <img src={Messsage} alt="" className="cont-im" />
            bancodealimentobalcarce@gmail.com
          </div>
        </div>
        <SocialBar />
      </div>
      <div className="cont-politic">
        <a
          href="https://www.bancodealimentos.org.ar/politica-de-privacidad/"
          className="privaciti"
          target="_blank"
          rel="noreferrer"
        >
          Politica de privacidad
        </a>
      </div>
    </div>
  );
};
export default FooterComponent;
