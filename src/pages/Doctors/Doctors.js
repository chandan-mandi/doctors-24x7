import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useDb from '../../hooks/usedb';
import './Doctors.css'

const Doctors = () => {
    // const doctors = useDb();
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorsdb.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    const { isLoading } = useAuth();
    return (
        <div className="top-services doctors-section bg-light py-5">
            <Container>
                <h2> <span>Meet our</span> Medical Specialists</h2>
                <Row>
                    {
                        doctors?.map(doctor =>
                            <Col lg={4} md={6} sm={12}>
                                <div className="card">
                                    <div className="box">
                                        <div className="content">
                                            {/* <h3>01</h3> */}
                                            <h4>{doctor.name}</h4>
                                            {!isLoading ?
                                                <img src={doctor.photo} alt="" />
                                                :
                                                <div className="text-center loading-spinner">
                                                    <Spinner animation="grow" variant="danger" />
                                                </div>
                                            }
                                            <div className="specialist-experience">
                                                <Row>
                                                    <Col lg={7} sm={12}>
                                                        <div className="specialist">
                                                            <h6>{doctor.specialty} Specialist</h6>
                                                        </div>
                                                    </Col>
                                                    <Col lg={5} sm={12}>
                                                        <div className="experience">
                                                            <h6>| {doctor.experience} yrs exp.</h6>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <h6>{doctor.qualification}</h6>
                                            <div className="fees">
                                                <p>You Pay <span className="icon"><FontAwesomeIcon icon={faRupeeSign} /></span>{doctor.fees}</p>
                                            </div>
                                            </div>
                                            <Link to="/appointment">Book Appointment</Link>
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