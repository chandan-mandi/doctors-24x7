import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './MakeAnAppointment.css';

const MakeAnAppointment = () => {
    return (
        <div className="make-an-appointment py-5">
            <Container>
                <h3>Need a Doctor</h3>
                <h2>Just Make An Appointment & You'r Done!</h2>
                <Button variant="outline-light" className="my-3">Make An Appointment</Button>
            </Container>
        </div>
    );
};

export default MakeAnAppointment;