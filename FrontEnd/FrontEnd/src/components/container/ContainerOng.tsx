import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import OngForm from '../pure/OngForm';
import SubmitButton from '../SubmitButton';
import Fondo4 from '../../assets/Rectanglepurple.png';
import axios from '../../http-common-ongs';
import '../../styles/ContainerOng.css';

const ContainerOng = () => {
  const [validated, setValidated] = useState(false);
  const [pName, setPName] = useState('');
  const [pLastName, setPLastName] = useState('');
  const [cuitOng, setCuitOng] = useState('');
  const [emailOng, setEmailOng] = useState('');
  const [phoneOng, setPhoneOng] = useState('');
  const [nameOng, setNameOng] = useState('');
  const [addressOng, setAddressOng] = useState('');
  const [typeOng, setTypeOng] = useState('');
  const navigate = useNavigate();

  const handleOnSubmitOngForm = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      type CreateNeedHelp = {
        pName: string;
        pLastName: string;
        emailOng: string;
        phoneOng: string;
        nameOng: string;
        addressOng: string;
        typeOng: string;
      };

      const needHelpOng = {
        ongname: nameOng,
        ongcuit: cuitOng,
        ongreason: typeOng,
        ongheadnm: pName,
        ongheadln: pLastName,
        ongaddress: addressOng,
        ongphone: phoneOng,
        ongemail: emailOng,
      };
      try {
        await axios.post<CreateNeedHelp>('/create', needHelpOng);
      } catch (error) {}
      navigate('/gratitude');
    }
  };

  return (
    <div>
      <img src={Fondo4} alt="" className="fondo4" />
      <div className="containerBodyNeedHelp">
        <div className="titleBodyNeedHelp">
          Inscribí a tu organización social
        </div>
        <p className="paragraphgBodyNeedHelp">
          Términos y Condiciones:
          <br />
          <br /> Brindar servicio alimenticio en el lugar, al menos tres veces a
          la semana.
          <br />
          <br /> Contar con alguna de las siguientes condiciones:
          <br /> Personería Jurídica propia*; Inscripción en el Ministerio de
          Relaciones Exteriores y Culto, Aval parroquial; Cooperadora escolar.
          <br />
          <br /> *La personería jurídica será solicitada por mail una vez que se
          complete el formulario.
          <br />
          <br /> Es importante tener en cuenta que:
          <br /> Los alimentos deberán ser retirados del depósito del Banco de
          <br />
          Alimentos por la organización.
          <br />
          <br /> Se solicitará una contribución simbólica por cada kg. retirado.
          <br />
          <br />
          Se solicitará número de CUIT a cada organización, para poder hacer
          recibo electrónico.
          <br />
          <br /> Los alimentos solo podrán ser utilizados para los servicios
          declarados.
        </p>
      </div>
      <div className="containerNeedHelpForm">
        <Form
          className="formong p-5"
          noValidate
          validated={validated}
          onSubmit={handleOnSubmitOngForm}
        >
          <OngForm
            pName={setPName}
            pLastName={setPLastName}
            cuitOng={setCuitOng}
            emailOng={setEmailOng}
            phoneOng={setPhoneOng}
            nameOng={setNameOng}
            addressOng={setAddressOng}
            typeOng={setTypeOng}
          />
          <div className="submitButtonFormOng">
            <SubmitButton />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContainerOng;
