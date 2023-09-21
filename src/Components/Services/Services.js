import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import "./Services.css";

const Services = () => {
    return (
        <>
            <section className="service__one">
                <Container className="container">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <h2>OUR SERVICES</h2>
                            <p className="service__text text-center">
                                Our exclusive luxury fleet is a step above the expected with our signature flair for
                                luxury, comfort, and latest technology features combining the luxury and capacity to
                                entertain that no other travel service can boast.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;