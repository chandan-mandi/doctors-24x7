import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useDb from '../../hooks/usedb';

const Doctors = () => {
    const doctors = useDb();
    return (
        <div className="top-services bg-light py-5">
            <Container>
                <h2>Our Top Doctors</h2>
                <Row>
                    {
                        doctors?.map(doctor =>
                            <Col lg={4} md={6} sm={12}>
                                <div className="card">
                                    <div className="box">
                                        <div className="content">
                                            {/* <h3>01</h3> */}
                                            <h4>{doctor.name}</h4>
                                            <img src={doctor.photo} alt="" />

                                            <h6>Specialists for {doctor.specilistsFor}</h6>
                                            <p>{doctor.symtoms1}{doctor.symtoms2}</p>
                                            <a href="#">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;