import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const News = () => {
    return (
        <div className="news-section py-5">
            <Container>
                <h2>Latest News</h2>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="news-card">
                            <Card>
                                <Card.Img variant="top" src="https://medicalpress.inspirythemes.com/wp-content/uploads/2014/05/news-2.jpg" />
                                <Card.Body>
                                    <Card.Title>How has the COVID-19 Pandemic Impacted Global Health?</Card.Title>
                                    <Card.Text>
                                        As hundreds of thousands of people continue to die each day from this disease, the COVID-19 pandemic continues to impact almost every aspect of daily life for the global population.
                                    </Card.Text>
                                    <Button variant="outline-success">Read More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="news-card">
                            <Card>
                                <Card.Img variant="top" src="https://medicalpress.inspirythemes.com/wp-content/uploads/2014/05/gallery-2-732x447.jpg" />
                                <Card.Body>
                                    <Card.Title>Computer games could be a useful tool in educating young adults about COVID-19 risks</Card.Title>
                                    <Card.Text>
                                    Lancaster University Computer games could become a useful tool in educating more young adults about the risks of Covid-19 and following preventative public health measures such as social.
                                    </Card.Text>
                                    <Button variant="outline-success">Read More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="news-card">
                            <Card>
                                <Card.Img variant="top" src="https://medicalpress.inspirythemes.com/wp-content/uploads/2014/05/gallery-3-732x447.jpg" />
                                <Card.Body>
                                    <Card.Title>How has the COVID-19 Pandemic Impacted Global Health?</Card.Title>
                                    <Card.Text>
                                        As hundreds of thousands of people continue to die each day from this disease, the COVID-19 pandemic continues to impact almost every aspect of daily life for the global population.
                                    </Card.Text>
                                    <Button variant="outline-success">Read More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default News;