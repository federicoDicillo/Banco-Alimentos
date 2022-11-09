import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/VoluntaryForm.css';

const VoluntaryForm = ({ name, lastName, phone, mail, dni }: any) => {
  const handleOnChange = (e: any) => {
    const names = e.target.name;
    switch (names) {
      case 'nombres':
        name(e.target.value);
        break;
      case 'apellidos':
        lastName(e.target.value);
        break;
      case 'mail':
        mail(e.target.value);
        break;
      case 'dni':
        dni(e.target.value);
        break;
      case 'telefono':
        phone(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="p-5">
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={handleOnChange}
            name="nombres"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={handleOnChange}
            name="apellidos"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleOnChange}
            name="dni"
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="ejem : usuario@email.com"
            onChange={handleOnChange}
            name="mail"
            pattern="[^@\s]+@[^@\s]+"
            title="Invalid email address"
          />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" onChange={handleOnChange} name="telefono" />
        </Form.Group>
      </Row>
    </div>
  );
};

export default VoluntaryForm;
