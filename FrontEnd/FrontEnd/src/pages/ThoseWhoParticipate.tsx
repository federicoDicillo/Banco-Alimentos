import React, { Fragment } from 'react';
import '../styles/Participate.css';
import ImgA from '../assets/5.jpg';
import ImgB from '../assets/6.jpeg';
import ImgC from '../assets/7.jpg';
import Granix from '../assets/GRANIX.jpg';
import Nutrien from '../assets/NUTRIEN.png';
import Mccain2 from '../assets/mccain2.png';
import Laserenisima from '../assets/laserenisima.png';
import Coiron from '../assets/coiron.svg';
import Carrefour from '../assets/Carrefour.png';
import FooterComponent from '../components/container/FooterComponent';

const ThoseWhoParticipate = () => {
  return (
    <Fragment>
      <div className="header-participate">
        <h1 className="header-h1">¿Quienes participan?</h1>
        <br />
        <p className="p-header">
          Todos somos voluntarios, cada uno desde su lugar.
          <br />
          Así, se consolida un equipo de fortalezas en el que cada parte es
          fundamental
        </p>
      </div>
      <div className="container">
        <div className="voluntary">
          <img src={ImgA} className="ImgA" alt="" />
          <div>
            <h3 className="header-h3">Voluntarios</h3>
            <p className="parrafo-v">
              Javier Fornieles. Fernando Mendoza. Maximiliano García. Marcela
              Boullon. Carlos Irazoqui. Tomás Martorello. Julien Laurençon.
              Julieta Fuertes. Alejandra Yommi. Laura Oveja Smith. María Celia
              Duy. Mariela Barda. Nicolás Santamaría. Beatriz García. Manuela
              Cucci. Pablo Buceta. Victoria Quillehauquy.
            </p>
          </div>
        </div>
        <div className="voluntary-d">
          <img src={ImgC} className="ImgB" alt="" />
          <div>
            <h3 className="header-h3-d">
              Voluntarios de la Comision Directiva
            </h3>
            <p className="parrafo-d">
              Ma. Elisabel Weilenmann. Ma. Inés Leaden. Ma. Eugenia Bazzalo.
              Laura Dimuro. Lourdes Filipini. Ma. Paz Irazoqui. Ana Moyano.
              Luján Nagore. Marta Paidón. Noemí Del Grosso de Capperi. Nicolás
              Cerono. Silvia Zitarosa. Graciela Minichiello. Julián Chiocarello.
              Daniel Cucci. Manuela Cucci. Ma.Celia Duy. Nicolás Santamaría.
              Andrés Olivares. Jorge Ledezma. Agustín Odriozola. Victoria
              Quillehauquy. Mariela Signes. Lucía Melucci.
            </p>
          </div>
        </div>
        <div className="voluntary-e">
          <img src={ImgB} className="ImgC" alt="" />
          <div>
            <h3 className="header-h3-e">
              Voluntarios en funciones especificas
            </h3>
            <p className="parrafo-e">
              Cecilia Aicega (Escribanía). Florencia Mancini (Nutrición).
              Santiago Scioli (Recursos). Guillermina Muñoz Barda (Asuntos
              Legales). Manuel Martinez Nava (Diseño Gráfico). Jorge Gianetti
              (Logística). Matías Santini (Recursos). Francisco García
              (Recursos). Josefina Muñoz (Redes)
            </p>
          </div>
        </div>
        <div className="cont-title">
          <h3 className="header-h3-Emp">
            Donantes de alimentos, productos y servicios logísticos.
          </h3>
        </div>
        <div className="container-logos">
          <img className="img-granix" src={Granix} alt="" />
          <img className="img-nutrien" src={Nutrien} alt="" />
          <img className="img-logos" src={Mccain2} alt="" />
          <img className="img-logos" src={Laserenisima} alt="" />
          <img className="img-logos" src={Coiron} alt="" />
          <img className="img-logos" src={Carrefour} alt="" />
        </div>
      </div>
      <div className="footer-participate">
        {' '}
        <FooterComponent />
      </div>
    </Fragment>
  );
};

export default ThoseWhoParticipate;
