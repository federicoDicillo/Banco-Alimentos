import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../styles/Donate.css';
import '../../styles/ContBtn.css';
import Img from '../../assets/isologotipo.png';

const CompanyForm = ({
  nameCompany,
  addres,
  typeCompany,
  cuit,
  mail,
  phone,
}: any) => {
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    switch (name) {
      case 'nombre empresa':
        nameCompany(e.target.value);
        break;
      case 'direccion':
        addres(e.target.value);
        break;
      case 'tipo de empresa':
        typeCompany(e.target.value);
        break;
      case 'cuit':
        cuit(e.target.value);
        break;
      case 'email':
        mail(e.target.value);
        break;
      case 'telefono':
        phone(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="p-5 ">
      <div className="formHeader">
        <img src={Img} alt="" className="logoBalcarce" />
        <div className="p-formu">
          Toda empresa puede ser nuestra aliada. Ya sea a través de la donación
          de alimentos, productos y servicios logísticos.
        </div>
        <h4 className="H4-form">Quiero sumarme como empresa </h4>{' '}
      </div>{' '}
      <div className="CPC">
        <Row className="mb-3 ">
          <div></div>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nombre Empresa</Form.Label>
            <Form.Control
              type="text"
              name="nombre empresa"
              required
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              onChange={handleOnChange}
              required
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Tipo de Empresa</Form.Label>
            <Form.Control
              type="text"
              required
              name="tipo de empresa"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Cuit</Form.Label>
            <Form.Control
              required
              type="text"
              name="cuit"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="ejem : usuario@email.com"
              name="email"
              onChange={handleOnChange}
              pattern="[^@\s]+@[^@\s]+"
              required
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom06">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              onChange={handleOnChange}
              placeholder="0000-0000-0000"
              required
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </div>
  );
};

export default CompanyForm;
