import React from 'react';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import "./Services.css";
import airplane from "../../Images/airplane.png";
import tower from "../../Images/tower.png";
import clock from "../../Images/clock.png";
import corporate from "../../Images/corporate.png";
import calender from "../../Images/calender.png";
import hotel from "../../Images/hotel.png";
import driver from "../../Images/driver.png";
import mobileCar from "../../Images/mobileCar.png";
import house from "../../Images/house.png";

const Services = () => {
    return (
        <>
            <section className="service">
                <Container className="container">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Stack className="service__one">
                                <h2 className="service__title text-center">OUR SERVICES</h2>
                                <p className="service__text text-center">
                                    Our exclusive luxury fleet is a step above the expected with our signature flair for
                                    luxury, comfort, and latest technology features combining the luxury and capacity to
                                    entertain that no other travel service can boast.
                                </p>
                            </Stack>
                        </Col>
                    </Row>
                    <Row className="service__box mx-0">
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={airplane} alt=""/>
                                <h3 className="service__tile__text">Airport Transport</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={tower} alt=""/>
                                <h3 className="service__tile__text">City Tour</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={clock} alt=""/>
                                <h3 className="service__tile__text">Hourly Hire</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={corporate} alt=""/>
                                <h3 className="service__tile__text">Corporates</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={calender} alt=""/>
                                <h3 className="service__tile__text">Events</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={hotel} alt=""/>
                                <h3 className="service__tile__text">Enterprise</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={driver} alt=""/>
                                <h3 className="service__tile__text">RSL Driver</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={mobileCar} alt=""/>
                                <h3 className="service__tile__text">RSL Mobile App</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="service__box__item">
                            <div className="service__item__tile">
                                <Image src={house} alt=""/>
                                <h3 className="service__tile__text">Institutions</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;