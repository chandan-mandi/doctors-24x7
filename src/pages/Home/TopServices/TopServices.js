import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DoctorsDbProvider } from '../../../App';
import useDb from '../../../hooks/usedb';
import useDoctorsdb from '../../../hooks/useDoctorsdb';
import './TopServices.css';

const TopServices = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorsdb.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    const filteredDermatology = doctors?.find(d => d?.specialty === 'Dermatologist')
    const filteredGeneralPhysician = doctors.find(d => d.specialty === "General Physician")
    const filteredPaediatrist = doctors.find(d => d.specialty === "Paediatrics")
    const filteredPsychiatrist = doctors.find(d => d.specialty === "Psychiatrist")
    const filteredCardiologist = doctors.find(d => d.specialty === "Cardiologist")
    const filteredDentist = doctors.find(d => d.specialty === "Dentist")

    return (
        <div className="top-services bg-light py-5">
            <Container>
                <h2 className="text-center">Our Medical Services</h2>
                <Row>
                    { // Dermatology section
                        <Col lg={4} md={6} sm={12}>
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h4>{filteredDermatology?.specialty}</h4>
                                        <img src={filteredDermatology?.categoryIcon} alt="" />
                                        <h6>Specialists for {filteredDermatology?.specilistsFor}</h6>
                                        <p>{filteredDermatology?.symtoms1}{filteredDermatology?.symtoms2}</p>
                                        <Link to={`/specialities/${filteredDermatology?.specialty}`}>Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    }
                    { // General Physicians Section
                        <Col lg={4} md={6} sm={12}>
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h4>{filteredGeneralPhysician?.specialty.slice(0, 17)}</h4>
                                        <img src={filteredGeneralPhysician?.categoryIcon} alt="" />
                                        <h6>Specialists for {filteredGeneralPhysician?.specilistsFor}</h6>
                                        <p>{filteredGeneralPhysician?.symtoms1}{filteredGeneralPhysician?.symtoms2}</p>
                                        <Link to={`/specialities/${filteredGeneralPhysician?.specialty}`}>Book Appointment</Link>                                    </div>
                                </div>
                            </div>
                        </Col>
                    }
                    { // filteredPaediatrist Section
                        <Col lg={4} md={6} sm={12}>
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h4>{filteredPaediatrist?.specialty.slice(0, 17)}</h4>
                                        <img src={filteredPaediatrist?.categoryIcon} alt="" />
                                        <h6>Specialists for {filteredPaediatrist?.specilistsFor}</h6>
                                        <p>{filteredPaediatrist?.symtoms1}{filteredPaediatrist?.symtoms2}</p>
                                        <Link to={`/specialities/${filteredPaediatrist?.specialty}`}>Book Appointment</Link>                                    </div>
                                </div>
                            </div>
                        </Col>
                    }
                    { // filteredPsychiatrist Section
                        <Col lg={4} md={6} sm={12}>
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h4>{filteredPsychiatrist?.specialty.slice(0, 17)}</h4>
                                        <img src={filteredPsychiatrist?.categoryIcon} alt="" />
                                        <h6>Specialists for {filteredPsychiatrist?.specilistsFor}</h6>
                                        <p>{filteredPsychiatrist?.symtoms1}{filteredPsychiatrist?.symtoms2}</p>
                                        <Link to={`/specialities/${filteredPsychiatrist?.specialty}`}>Book Appointment</Link>                                    </div>
                                </div>
                            </div>
                        </Col>
                    }
                    { // filteredCardiologist Section
                        <Col lg={4} md={6} sm={12}>
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h4>{filteredCardiologist?.specialty.slice(0, 17)}</h4>
                                        <img src={filteredCardiologist?.categoryIcon} alt="" />
                                        <h6>Specialists for {filteredCardiologist?.specilistsFor}</h6>
                                        <p>{filteredCardiologist?.symtoms1}{filteredCardiologist?.symtoms2}</p>
                                        <Link to={`/specialities/${filteredCardiologist?.specialty}`}>Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    }
                    { // filteredDentist Section
                        <Col lg={4} md={6} sm={12}>
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h4>{filteredDentist?.specialty.slice(0, 17)}</h4>
                                        <img src={filteredDentist?.categoryIcon} alt="" />
                                        <h6>Specialists for {filteredDentist?.specilistsFor}</h6>
                                        <p>{filteredDentist?.symtoms1}{filteredDentist?.symtoms2}</p>
                                        <Link to={`/specialities/${filteredDentist?.specialty}`}>Book Appointment</Link>                                    </div>
                                </div>
                            </div>
                        </Col>
                    }

                </Row>
            </Container>
        </div>
    );
};

export default TopServices;