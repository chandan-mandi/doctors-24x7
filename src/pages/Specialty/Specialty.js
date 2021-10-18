import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useDb from '../../hooks/usedb';
import useDoctorsdb from '../../hooks/useDoctorsdb';

const Specialty = () => {
    const { specialty } = useParams();
    const { isLoading } = useDb();
    // console.log(param);
    const doctors = useDb();
    console.log(doctors);
    const matchPd = doctors?.filter(d => d?.specialty?.includes(specialty))
    console.log(matchPd);
    return (
        <div>
            <div className="top-services bg-light py-5">
                {!isLoading ? <Container>
                    <Row>
                        <h2>This is Category wise Doctor. {specialty} </h2>
                        {
                            matchPd?.map(doctor =>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="card">
                                        <div className="box">
                                            <div className="content">
                                                {/* <h3>01</h3> */}
                                                <h4>{doctor?.name}</h4>
                                                <img src={doctor?.photo} alt="" />

                                                <h6>Specialists for {doctor?.specilistsFor}</h6>
                                                <p>{doctor?.symtoms1}{doctor?.symtoms2}</p>
                                                <Link to="/">Book Appointment</Link>
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