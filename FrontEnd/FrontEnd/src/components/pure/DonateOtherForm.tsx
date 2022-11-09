import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DonateOtherForm = ({ otherDonate, quantityOtherDonate }: any) => {
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    switch (name) {
      case 'otra donacion':
        otherDonate(e.target.value);
        break;
      case 'cantidad donacion':
        quantityOtherDonate(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h5>Otras donaciones</h5>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Donación</Form.Label>
          <Form.Control
            type="text"
            name="otra donacion"
            required
            onChange={handleOnChange}
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="text"
            required
            name="cantidad donacion"
            onChange={handleOnChange}
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </div>
  );
};

export default DonateOtherForm;
