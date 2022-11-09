import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CompanyForm from '../pure/CompanyForm';
import VoluntaryForm from '../pure/VoluntaryForm';
import DonateFoodForm from '../pure/DonateFoodForm';
import DonateOthersForm from '../pure/DonateOtherForm';
import SubmitButton from '../SubmitButton';
import axios from '../../http-common-donate';
import { useAppContext } from '../../context/Context';
import Img from '../../assets/isologotipo.png';
import { useNavigate } from 'react-router-dom';

const ContainerCheck = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddres, setCompanyAddres] = useState('');
  const [typeCompany, setTypeCompany] = useState('');
  const [cuit, setCuit] = useState('');
  const [mailCompany, setMailCompany] = useState('');
  const [phoneCompany, setPhoneCompany] = useState('');
  const [soyPersona, setSoyPersona] = useState(false);
  const [soyEmpresa, setSoyEmpresa] = useState(false);
  const [validated, setValidated] = useState(false);
  const [categoryDonation, setCategoryDonation] = useState('Granos');
  const [quantityDonation, setQuantityDonation] = useState('');
  const [infoFood, setInfoFood] = useState('');
  const [donateFood, setDonateFood] = useState('');
  const [otherDonate, setOtherDonate] = useState('');
  const [infoOtherDonate, setInfoOtherDonate] = useState('');
  const [quantityOtherDonate, setQuantityOtherDonate] = useState('');
  const [stateSoyPersona, setStateSoyPersona] = useState(true);
  const [stateSoyEmpresa, setStateSoyEmpresa] = useState(true);
  const context = useAppContext();
  const navigate = useNavigate();

  const handleOnSubmitVoluntaryForm = async (event: {
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
    /* validaciones del tipo de donante y tipo de donacion */
    if (form.checkValidity() === true) {
      if (soyPersona && donateFood) {
        type CreatePeopleDonate = {
          dni: string;
          name: string;
          lastName: string;
          phone: string;
          mail: string;
          categoryDonation: string;
          quantityDonation: string;
          infoFood: boolean;
        };
        const peopleDonate = {
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
          await axios.post<CreatePeopleDonate>('/create', peopleDonate);
        } catch (error) {}

        context.createPeopleDonation(peopleDonate);
        navigate('/gratitude');
      }
      if (soyPersona && otherDonate) {
        type CreatePeopleDonate = {
          dni: string;
          name: string;
          lastName: string;
          phone: string;
          mail: string;
          categoryDonation: string;
          quantityDonation: string;
          infoFood: boolean;
        };
        const peopleDonate = {
          user: {
            userdni: dni,
            username: name,
            userlastname: lastName,
            userphone: phone,
            useremail: mail,
          },
          doncategory: infoOtherDonate,
          dondetails: quantityOtherDonate,
        };
        try {
          await axios.post<CreatePeopleDonate>('/create', peopleDonate);
        } catch (error) {}
        context.createCompanyDonation(peopleDonate);
        navigate('/gratitude');
      }
      if (soyEmpresa && donateFood) {
        type CreateCompanyDonate = {
          cuit: string;
          companyName: string;
          companyAddres: string;
          typeCompany: string;
          mailCompany: string;
          phoneCompany: string;
          categoryDonation: string;
          quantityDonation: string;
          infoFood: string;
        };

        const companyDonate = {
          company: {
            cocuit: cuit,
            coname: companyName,
            coaddress: companyAddres,
            cocategory: typeCompany,
            coemail: mailCompany,
            cophone: phoneCompany,
          },
          doncategory: categoryDonation,
          dondetails: quantityDonation,
          donperishable: infoFood,
        };
        try {
          await axios.post<CreateCompanyDonate>('/create', companyDonate);
        } catch (error) {}
        context.createCompanyDonation(companyDonate);
        navigate('/gratitude');
      }
      if (soyEmpresa && otherDonate) {
        type CreateCompanyDonate = {
          cuit: string;
          companyName: string;
          companyAddres: string;
          typeCompany: string;
          mailCompany: string;
          phoneCompany: string;
          infoOtherDonate: string;
          quantityOtherDonate: string;
        };
        const companyDonate = {
          company: {
            cocuit: cuit,
            coname: companyName,
            coaddress: companyAddres,
            cocategory: typeCompany,
            coemail: mailCompany,
            cophone: phoneCompany,
          },
          doncategory: infoOtherDonate,
          dondetails: quantityOtherDonate,
        };
        try {
          await axios.post<CreateCompanyDonate>('/create', companyDonate);
        } catch (error) {}
        context.createCompanyDonation(companyDonate);
        navigate('/gratitude');
      }
    }
  };

  const handleOnCheckBox = (e: {
    target: {
      id: any;
      checked: any;
    };
  }) => {
    const name = e.target.id;
    switch (name) {
      case 'persona':
        setSoyPersona(e.target.checked);
        setStateSoyEmpresa(false);
        break;
      case 'empresa':
        setSoyEmpresa(e.target.checked);
        setStateSoyPersona(false);
        break;
      case 'comida':
        setDonateFood(e.target.checked);
        break;
      case 'otros':
        setOtherDonate(e.target.checked);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
        className="form-c"
      >
        {stateSoyPersona && stateSoyEmpresa ? (
          <div className="p-5">
            <div className="formHeader">
              <img src={Img} alt="" className="logoBalcarce" />
              <div className="p-formu">
                El hambre no espera para miles de chicos y chicas que siguen
                necesitando de los comedores para tener un plato de comida.
              </div>
              <h4 className="H4-form">Quiero sumarme como donante</h4>{' '}
            </div>
            <div>
              <Form.Group className="check-bool" as={Col} md="12">
                <Form.Check
                  type="checkbox"
                  onChange={handleOnCheckBox}
                  label="¿Eres una Persona ?"
                  className="check-1"
                  id="persona"
                />
                <Form.Check
                  type="checkbox"
                  onChange={handleOnCheckBox}
                  label="¿Eres una Empresa ?"
                  className="check-1"
                  id="empresa"
                />
              </Form.Group>
            </div>
          </div>
        ) : (
          ''
        )}

        {soyPersona ? (
          <div className="p-5">
            <div className="formHeader">
              <img src={Img} alt="" className="logoBalcarce" />
              <div className="p-formu">
                El hambre no espera para miles de chicos y chicas que siguen
                necesitando de los comedores para tener un plato de comida.
              </div>
              <h4 className="H4-form">Quiero sumarme como Donante</h4>{' '}
            </div>
            <div className="py-5">
              <VoluntaryForm
                name={setName}
                lastName={setLastName}
                phone={setPhone}
                mail={setMail}
                dni={setDni}
              />
            </div>

            <Form.Group as={Col} md="2">
              <div className="check-form1">
                <Form.Check
                  type="checkbox"
                  label="Donar Alimentos"
                  id="comida"
                  className="conditionDonateFood"
                  onChange={handleOnCheckBox}
                />
                <Form.Check
                  type="checkbox"
                  label="Otras Donaciones"
                  id="otros"
                  className="conditionDonateOther"
                  onChange={handleOnCheckBox}
                />
              </div>
            </Form.Group>
            {donateFood && soyPersona ? (
              <div className="conditionDonateFood2">
                <DonateFoodForm
                  value={categoryDonation}
                  setValue={setCategoryDonation}
                  quantity={setQuantityDonation}
                  info={setInfoFood}
                />
              </div>
            ) : (
              ''
            )}
            {otherDonate && soyPersona ? (
              <div className="conditionDonateOther2">
                <DonateOthersForm
                  otherDonate={setInfoOtherDonate}
                  quantityOtherDonate={setQuantityOtherDonate}
                />
              </div>
            ) : (
              ''
            )}
            <div className="conditionSb">
              <SubmitButton />
            </div>
          </div>
        ) : (
          ''
        )}
        {soyEmpresa ? (
          <div>
            <CompanyForm
              nameCompany={setCompanyName}
              addres={setCompanyAddres}
              typeCompany={setTypeCompany}
              cuit={setCuit}
              mail={setMailCompany}
              phone={setPhoneCompany}
            />
            <Form.Group as={Col} md="2">
              <div className="check-form2">
                <Form.Check
                  type="checkbox"
                  label="Donar Alimentos"
                  id="comida"
                  onChange={handleOnCheckBox}
                />
                <Form.Check
                  type="checkbox"
                  label="Otras Donaciones"
                  id="otros"
                  onChange={handleOnCheckBox}
                />
              </div>
            </Form.Group>
            {donateFood && soyEmpresa ? (
              <div className="conditionDonateFood">
                <DonateFoodForm
                  value={categoryDonation}
                  setValue={setCategoryDonation}
                  quantity={setQuantityDonation}
                  info={setInfoFood}
                />
              </div>
            ) : (
              ''
            )}
            {otherDonate && soyEmpresa ? (
              <div className="conditionDonateOther">
                <DonateOthersForm
                  otherDonate={setInfoOtherDonate}
                  quantityOtherDonate={setQuantityOtherDonate}
                />
              </div>
            ) : (
              ''
            )}
            <div className="conditionSb">
              <SubmitButton />
            </div>
          </div>
        ) : (
          ''
        )}
      </Form>
    </div>
  );
};

export default ContainerCheck;
