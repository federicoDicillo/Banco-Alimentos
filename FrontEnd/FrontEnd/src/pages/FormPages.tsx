import React from 'react';
import FormContainer from '../components/container/ContainerForm';
import '../styles/FormPages.css';
import back from '../assets/2.jpg';
import Content from '../components/Content';
import FooterComponent from '../components/container/FooterComponent';

const FormPages = () => {
  return (
    <div>
      <FormContainer />
      <img src={back} alt="" className="fondo" />
      <div className="footerFormContainer">
        <Content />
        <FooterComponent />
      </div>
    </div>
  );
};

export default FormPages;
