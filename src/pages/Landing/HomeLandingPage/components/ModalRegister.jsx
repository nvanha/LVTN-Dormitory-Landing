import { Modal } from 'react-bootstrap';

const ModalRegister = ({ handleClose }) => (
  <Modal
    show
    onHide={handleClose}
    className="home-landing-page modal-register"
  >
    <Modal.Body>
      Register
    </Modal.Body>
  </Modal>
);

export default ModalRegister;
