import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useDb from '../../hooks/usedb';
import useDoctorsdb from '../../hooks/useDoctorsdb';

const Specialty = () => {
    const { specialty } = useParams();
    // console.log(specialty);
    const [filterDr,setFilterDr] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('/doctorsdb.json')
        .then(res => res.json())
        .then(data => setFilterDr(data.filter(d => d?.specialty?.includes(specialty))))
    },[])
    return (
        <div>
            <div className="top-services bg-light py-5">
                {!isLoading ?
                    <Container>
                        <Row>
                            <h2>This is Category wise Doctor. {specialty} </h2>
                            {
                                filterDr?.map(doctor =>
                                    <Col lg={4} md={6} sm={12} key={filterDr.id}>
                                        <div className="card">
                                            <div className="box">
                                                <div className="content">
                                                    {/* <h3>01</h3> */}
                                                    <h4>{doctor?.name}</h4>
                                                    <img src={doctor?.photo} alt="" />
                                                    {/* <h6>Specialists for {doctor?.specilistsFor}</h6>
                                                    <p>{doctor?.symtoms1}{doctor?.symtoms2}</p> */}
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
                    </Container> :
                    <div className="text-center loading-spinner">
                        <Spinner animation="grow" variant="danger" />
                    </div>
                }
            </div>
        </div>
    );
};

export default Specialty;