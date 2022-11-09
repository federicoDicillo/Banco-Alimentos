import React, { Fragment } from 'react';
import '../styles/Home.css';
import CarouselComponent from '../components/container/CarouselComponent';
import Int from '../assets/int.png';
import IntClose from '../assets/intClose.png';
import bal from '../assets/bal.png';
import FooterComponent from '../components/container/FooterComponent';
import ModalComponent from '../components/container/ModalComponent';
import Content from '../components/Content';
import fundadora from '../assets/fundadora.png';
const Home = () => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <h1>Sumate como donante</h1>
          <p>
            Somos una organización sin fines de lucro, y trabajamos con el
            objetivo de contribuir a la reducción del hambre, mejorar la
            nutrición y evitar el desperdicio de alimentos en Argentina. BDA
            Balcarce es un puente entre quienes sufren hambre y quienes desean
            colaborar para mejorar la situación, a través de donaciones de
            alimentos aptos para el consumo, con el fin de almacenarlos,
            clasificarlos y distribuirlos entre diferentes instituciones. ¡Todos
            podemos ser parte!
          </p>
          <ModalComponent />
          <div className="bg-circle">
            <CarouselComponent />
          </div>
        </div>
        <div className="cite">
          <div>
            <img src={fundadora} className="fundadora" alt="fundadora" />
            <p className="coordinadora">
              Marcela Boullon
              <br /> Coordinadora general
            </p>
            <img src={Int} className="cite-Int " alt="int" />
            <p className="cite-p">
              Trabajamos para reducir el hambre, mejorar la nutrición y evitar
              el desperdicio de alimentos. Recibimos grandes donaciones de
              alimentos y productos y los distribuimos entre comedores y otras
              organizaciones sociales que dan de comer a personas que lo
              necesitan.
            </p>
            <img src={IntClose} className="intClose" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="container-img">
            <p className="comotrabajamos">Como Trabajamos</p>
            <img src={bal} alt="" className="bal-img" />
          </div>
          <div className="container-CTrabajamos">
            <div className="color-contenedor">
              <div className="span1">1 </div>
              <p className="container-color paso1">Paso 1</p>
              <p className="container-color">
                Recibimos donaciones de alimentos por parte de empresas,
                productores, supermercados y mayoritas.
              </p>{' '}
            </div>
            {''}
          </div>
          <div className="container-CTrabajamos2">
            <div>
              <div className="span2">2</div>
              <p className="container-color2 paso2">Paso 2</p>
              <p className="container-color2">
                Los clasificamos con ayuda de voluntarios
              </p>
            </div>
            <div className="containerSpan3">
              <div className="span3">3</div>
              <p className="container-color3 paso3">Paso 3</p>
              <p className="container-color3">
                Los almacenamos en nuestro depósito
              </p>
            </div>
          </div>
        </div>
        <Content />
      </div>
      <div className="cFooter">
        <FooterComponent />
      </div>
    </Fragment>
  );
};

export default Home;
