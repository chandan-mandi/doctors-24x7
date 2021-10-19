import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useDb from '../../hooks/usedb';
import './Doctors.css'

const Doctors = () => {
    // const doctors = useDb();
    const [doctors,setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorsdb.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
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