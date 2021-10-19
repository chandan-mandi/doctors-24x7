import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment-section py-5">
            <Container>
                <Row>
                    <Col lg={6} sm={12} className="bg-white p-3 appointment-form">
                        <h2>Make an Appointment</h2>
                        <p>Would you like to consult now or schedule for later? I am free at any time during the consultation to request for the same.</p>
                        <Form className="pt-3">
                            <Form.Group className="mb-1" controlId="formGridAddress1">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formGridAddress1">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formGridAddress1">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formGridAddress1">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Photo URL" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label></Form.Label>
                                <Form.Control as="textarea" placeholder="Message" rows={3} />
                            </Form.Group>
                            <p className="text-danger"></p>
                            <Button className="login-btn" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div>
                            <img src="https://radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2018/11/figure2.png" className="img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Appointment;