import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImgA from '../../assets/isologotipo.png';

const OngForm = ({
  pName,
  pLastName,
  cuitOng,
  emailOng,
  phoneOng,
  nameOng,
  addressOng,
  typeOng,
}: any) => {
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    switch (name) {
      case 'persona nombre':
        pName(e.target.value);
        break;
      case 'persona apellido':
        pLastName(e.target.value);
        break;
      case 'cuit ong':
        cuitOng(e.target.value);
        break;
      case 'email ong':
        emailOng(e.target.value);
        break;
      case 'telefono ong':
        phoneOng(e.target.value);
        break;
      case 'nombre ong':
        nameOng(e.target.value);
        break;
      case 'direccion ong':
        addressOng(e.target.value);
        break;
      case 'tipo ong':
        typeOng(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="formHeader">
        <img src={ImgA} alt="" className="logoBalcarce" />
        <div className="p-formu">
          Trabajamos para reducir el hambre, mejorar la nutrición y evitar el
          desperdicio de alimentos en Balcarce, Argentina.
        </div>
      </div>{' '}
      <div className="py-5">
        <Row className="mb-3 ">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nombre </Form.Label>
            <Form.Control
              required
              type="text"
              name="persona nombre"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Apellido </Form.Label>
            <Form.Control
              required
              type="text"
              name="persona apellido"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Cuit de la Organización</Form.Label>
            <Form.Control
              required
              type="text"
              name="cuit ong"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="ejem : usuario@email.com"
              name="email ong"
              required
              pattern="[^@\s]+@[^@\s]+"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="0000-0000-0000"
              required
              name="telefono ong"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Nombre de la Organización</Form.Label>
            <Form.Control
              type="text"
              required
              name="nombre ong"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              required
              name="direccion ong"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Tipo de Organización</Form.Label>
            <Form.Control
              type="text"
              required
              name="tipo ong"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>{' '}
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </div>
  );
};

export default OngForm;
