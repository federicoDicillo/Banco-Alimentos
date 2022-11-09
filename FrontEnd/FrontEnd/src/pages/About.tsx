import React from 'react';
import '../styles/About.css';
import Img from '../assets/3.jpeg';
import FooterComponent from '../components/container/FooterComponent';
const About = () => {
  return (
    <div className="headerAbout">
      <div className="containerHeaderAbout">
        <h1 className="titleAbout">Sobre Nosotros</h1>
        <p className="paragraphAbout">
          Somos un Banco de Alimentos de Balcarce, Provincia de Buenos Aires.
          Controlamos el hambre y contribuimos a una buena nutrición, rescatando
          mermas de más de 50 de donantes de alimentos. Con la creación de un
          Centro Hortícola Solidario. Transformando la realidad de más de 600
          familias carenciadas , promoviendo la educación nutricional a través
          de 20 Instituciones de la comunidad.
        </p>
      </div>
      <div className="bodyAbout">
        <img className="imgAbout" src={Img} alt="" />
        <div className="paragraphs">
          <h2 className="titleOneAbout titlesparagraphs">Misión</h2>
          <p className="paragraphOneAbout"> Ayudar al que sufre hambre.</p>
          <h3 className="titletwoAbout titlesparagraphs">Visión</h3>
          <p>
            Ser una organización que está enfocada en la temática del hambre, la
            nutrición y la inseguridad alimentaria, para llegar con más
            alimentos a más personas que sufren hambre, incorporando más
            organizaciones comunitarias, en alianza con otros actores sociales.
          </p>
          <h4 className="titlethreeAbout titlesparagraphs">
            Este modelo se sostiene gracias..
          </h4>
          <p>
            - Al apoyo de una comunidad de donantes.
            <br />- Al compromiso de empresas y fundaciones donantes.
            <br />- Al desarrollo de eventos a beneficio, acciones de marketing
            filantrópico y marketing digital.
            <br />- A las contribuciones simbólicas que realizan las
            organizaciones sociales.
          </p>
        </div>
      </div>
      <div className="contentAboutFooter">
        <FooterComponent />
      </div>
    </div>
  );
};

export default About;
