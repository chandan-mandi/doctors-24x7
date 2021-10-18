import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container className="pt-5">
            <Row>
                <Col lg={4} sm={12}>
                    <div className="opening-hours">
                        <h3>Opening Hours</h3>
                        <div className="day-and-time d-flex">
                            <p>Monday - Friday</p>
                            <p>9.00 - 20.00</p>
                        </div>
                        <div className="day-and-time d-flex">
                            <p>Saturday</p>
                            <p>10.00 - 16.00</p>
                        </div>
                        <div className="day-and-time d-flex">
                            <p>Sunday</p>
                            <p>9.30 - 18.00</p>
                        </div>
                        <h4 className="pt-3">Need Help?</h4>
                        <p>JUST MAKE AN APPOINMENT TO GET HELP FROM OUR EXPERTS</p>
                        <Button variant="primary">Request an appointment</Button>
                    </div>
                </Col>
                <Col lg={4} sm={12}>
                    <div className="about-descrip">
                        <h3>About</h3>
                        <h2>Doctors 24x7</h2>
                        <p>One of the world's leading hospitals providing safe & compassionate care at its best for everyone.</p>
                        <p className="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum amet iusto amet consec.</p>
                        <img src="http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/signature.png" alt="" />
                        <br />
                        <Button className="mt-2" variant="outline-success">Read More</Button>
                    </div>
                </Col>
                <Col lg={4} sm={12}>
                    <div className="about-desc-img">
                        <img src="http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/photos/doctor.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;