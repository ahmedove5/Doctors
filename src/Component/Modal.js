import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Moda() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <div>
        <Button variant="primary"  id = "button" onClick={handleShow}>
        Book Appointment
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Dpne</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcom to Your Hospitak !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button id='button' variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
