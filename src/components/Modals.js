
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"
function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
     
          <Modal.Title>Listenining</Modal.Title>
        
        <Modal.Body>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals
