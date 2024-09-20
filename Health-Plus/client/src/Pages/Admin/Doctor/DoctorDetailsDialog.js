import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap'; 
import doctorImage from '../../../Assets/doctor.png';

function DoctorDetailsDialog({ show, onClose, doctor }) {
    const convertByteArrayToImage = (byteArray) => {
        return byteArray
            ? `data:image/jpeg;base64,${byteArray}`
            : doctorImage;
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Doctor Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={4} className="text-center">
                        <img
                            src={convertByteArrayToImage(doctor.image)}
                            alt="Doctor"
                            className="img-fluid rounded-circle"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col md={8}>
                        <p><strong>ID:</strong> {doctor.id}</p>
                        <p><strong>Name:</strong> {doctor.name}</p>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DoctorDetailsDialog;
