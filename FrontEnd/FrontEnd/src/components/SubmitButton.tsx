import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/SubmitButton.css';
const SubmitButton = () => {
  return (
    <Button type="submit" variant="success">
      Enviar
    </Button>
  );
};

export default SubmitButton;
