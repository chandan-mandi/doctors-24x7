import { faAmbulance, faMedkit, faPlusSquare, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurFacilities.css'

const OurFacilities = () => {
    return (
        <div className="our-facilities py-5">
            <Container>
                <h2 className="text-center pb-5">Our Facilities</h2>
                <Row>
                    <Col lg={4} sm={12}>
                        <h3>Health and Medical</h3>
                        <h4>Online Consultancy</h4>
                        <p className="py-3">We are India’s largest omnichannel digital healthcare platform with the core belief that ‘Expertise is for Everyone’.</p>
                        <button className="btn btn-danger">VIEW OUR FACILITIES</button>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Row>
                            <Col lg={3} md={3} sm={3} className="facilitiy-icon">
                                <FontAwesomeIcon icon={faPlusSquare}/>
                            </Col>
                            <Col lg={9} md={9} sm={9}>
                                <h3>Rehabilitation Center</h3>
                                <p>We provide the best drug alcohol rehabilitation, De-addiction treatment.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} md={3} sm={3} className="facilitiy-icon">
                                <FontAwesomeIcon icon={faUserMd}/>
                            </Col>
                            <Col lg={9} md={9} sm={9}>
                                <h3>Qualified Doctors</h3>
                                <p>All surgeons must first qualify as doctors, so they will have a basic medical degree which includes the principles of medicine and surgery.</p>
                            </Col>
                        </Row>
                    </Col> 
                    <Col lg={4} sm={12}>
                    <Row>
                            <Col lg={3} md={3} sm={3} className="facilitiy-icon">
                                <FontAwesomeIcon icon={faMedkit}/>
                            </Col>
                            <Col lg={9} md={9} sm={9}>
                                <h3>Medical Counseling</h3>
                                <p>West Bengal MBBS Counselling 2021 Round-wise seat allotment dates will be available soon.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} md={3} sm={3} className="facilitiy-icon">
                                <FontAwesomeIcon icon={faAmbulance}/>
                            </Col>
                            <Col lg={9} md={9} sm={9}>
                                <h3>Emergency Services</h3>
                                <p> Ambulance services provide 999 emergency ambulances, rapid response vehicles, First Responders and patient transport services</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurFacilities;