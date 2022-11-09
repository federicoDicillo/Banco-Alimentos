import React, { Fragment } from 'react';
import ContainerDonate from '../components/container/ContainerDonate';
import Content from '../components/Content';
import FooterComponent from '../components/container/FooterComponent';
import Car from '../assets/3.jpeg';
import '../styles/Donate.css';
const Donate = () => {
  return (
    <div>
      <ContainerDonate />
      <img src={Car} alt="" className="fondo2" />
      <Fragment>
        <Content />
        <FooterComponent />
      </Fragment>
    </div>
  );
};

export default Donate;
