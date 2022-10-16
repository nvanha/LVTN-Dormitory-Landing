import { Modal } from 'react-bootstrap';

const ModalPreviewDetails = ({ show, handleClose, data }) => (
  <Modal
    show={show}
    onHide={handleClose}
    className="home-landing-page modal-review-details"
  >
    <Modal.Header closeButton>
      <Modal.Title
        className="cs-fz-24 cs-fw-800 cs-text-white"
        style={{ textTransform: 'uppercase' }}
      >
        {data.title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <iframe src={data.link} title={data.title} allow="geolocation" />
    </Modal.Body>
  </Modal>
);

export default ModalPreviewDetails;
