import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../../styles/Modal.css';

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modal-btn" onClick={handleShow}>
        Quiero Ayudar!{' '}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <button
          type="button"
          onClick={handleClose}
          className="button-close"
          aria-label="Close"
        >
          X
        </button>{' '}
        <Modal.Body>
          <Link to="/donate">
            <Button className="button-modal" onClick={handleClose}>
              {' '}
              Sumate como donante
            </Button>
          </Link>{' '}
          <Link to="forms">
            <Button className="button-modal" onClick={handleClose}>
              Sumate como voluntario
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalComponent;
