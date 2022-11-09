import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DonateFoodForm from '../pure/DonateFoodForm';
import VoluntaryForm from '../pure/VoluntaryForm';
import SubmitButton from '../SubmitButton';
import ContainerCheck from './ContainerCheck';
import axios from '../../http-common-donate';
import { useAppContext } from '../../context/Context';
import Img from '../../assets/isologotipo.png';
import '../../styles/HeaderForm.css';
import { useNavigate } from 'react-router-dom';

const ContainerDonate = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [categoryDonation, setCategoryDonation] = useState('Granos');
  const [quantityDonation, setQuantityDonation] = useState('');
  const [infoFood, setInfoFood] = useState(false);
  const [minorista, setMinorista] = useState(false);
  const [mayorista, setMayorista] = useState(false);
  const [validated, setValidated] = useState(false);
  const [stateMinorista, setStateMinorista] = useState(true);
  const [stateMayorista, setStateMayorista] = useState(true);

  const context = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (form.checkValidity() === true) {
      type CreatePeopleDonation = {
        dni: string;
        name: string;
        lastName: string;
        phone: string;
        mail: string;
        categoryDonation: string;
        quantityDonation: string;
        infoFood: boolean;
      };

      const peopleDonation = {
        user: {
          userdni: dni,
          username: name,
          userlastname: lastName,
          userphone: phone,
          useremail: mail,
        },
        doncategory: categoryDonation,
        dondetails: quantityDonation,
        donperishable: infoFood,
      };

      try {
        await axios.post<CreatePeopleDonation>('/create', peopleDonation);
      } catch (error) {}

      context.createPeopleDonation(peopleDonation);
      navigate('/gratitude');
    }
  };

  const handleOnClick = (event: any) => {
    const id = event.target.id;
    switch (id) {
      case 'minorista':
        setMinorista(!minorista);
        setStateMinorista(false);
        break;
      default:
      case 'mayorista':
        setMayorista(!mayorista);
        setStateMayorista(false);
        break;
    }
  };

  return (
    <div>
      <Form
        noValidate
        className="minForm p-5"
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className="formHeader">
          <img src={Img} alt="" className="logoBalcarce" />
          <div className="p-formu">
            El hambre no espera para miles de chicos y chicas que siguen
            necesitando de los comedores para tener un plato de comida.
          </div>
          <h4 className="H4-form">Quiero sumarme como donante </h4>{' '}
        </div>
        {stateMinorista && stateMayorista ? (
          <div className="contBtnType">
            <Button
              onClick={handleOnClick}
              id="minorista"
              className="btn m-5 w-45 btn-success text-light"
            >
              Donante Minorista
            </Button>
            <Button
              onClick={handleOnClick}
              id="mayorista"
              className="btn btn-success w-45 text-light"
            >
              Donante Mayorista
            </Button>
          </div>
        ) : (
          ''
        )}
        <div className="form-minorista">
          {minorista ? (
            <VoluntaryForm
              name={setName}
              lastName={setLastName}
              phone={setPhone}
              mail={setMail}
              dni={setDni}
            />
          ) : (
            ''
          )}
          {minorista ? (
            <DonateFoodForm
              quantity={setQuantityDonation}
              info={setInfoFood}
              value={categoryDonation}
              setValue={setCategoryDonation}
            />
          ) : (
            ''
          )}
        </div>
        <div className="contSb">{minorista ? <SubmitButton /> : ''}</div>
      </Form>
      {mayorista ? <ContainerCheck /> : ''}
    </div>
  );
};

export default ContainerDonate;
