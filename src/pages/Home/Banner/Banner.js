import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
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
                                <h5>Sweet and Spicy Peparoni</h5>
                                <div>
                                    <p>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                                    <Button variant="warning">Book Appointment</Button>
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
                                <h5>Sweet and Spicy Peparoni</h5>
                                <div>
                                    <p>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                                    <Button variant="success">Book Appointment</Button>
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
                                <h5>Sweet and Spicy Peparoni</h5>
                                <div>
                                    <p>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                                    <Button variant="primary">Book Appointment</Button>
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