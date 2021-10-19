import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide1 from '../../../img/doctors/slide1.jpg';
import slide2 from '../../../img/doctors/slide2.jpg';
import slide3 from '../../../img/doctors/slide3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slide1}
                        alt="First slide"
                    />
                    <Row>
                        <Col sm={5}>
                        </Col>

                        <Carousel.Caption className="first-slide">
                            <Col sm={5}>
                                <h5>Get India's Best Health Care</h5>
                                <div>
                                    <p>
                                        Always caring about your health, we are here to help you!
                                        You have a beautiful heart. Take good care of it.
                                    </p>
                                    <Button as={Link} to="/appointment" variant="warning">Book Appointment</Button>
                                </div>
                            </Col>
                        </Carousel.Caption>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slide2}
                        alt="First slide"
                    />
                    <Row>
                        <Carousel.Caption className="">
                            <Col sm={5}>
                                <h5>Premium Health Problem</h5>
                                <div>
                                    <p>
                                        Always caring about your health, we are here to help you!
                                        You have a beautiful heart. Take good care of it.
                                    </p>
                                    <Button as={Link} to="/appointment" variant="success">Book Appointment</Button>
                                </div>
                            </Col>
                        </Carousel.Caption>
                        <Col sm={7}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="First slide"
                    />
                    <Row>
                        <Carousel.Caption className="">
                            <Col sm={5}>
                                <h5>Homecare Brings You</h5>
                                <div>
                                    <p>
                                        Always caring about your health, we are here to help you!
                                        You have a beautiful heart. Take good care of it.
                                    </p>
                                    <Button as={Link} to="/appointment" variant="primary">Book Appointment</Button>
                                </div>
                            </Col>
                        </Carousel.Caption>
                        <Col sm={7}></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;