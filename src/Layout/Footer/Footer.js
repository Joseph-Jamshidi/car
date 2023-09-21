import React from 'react';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Footer.css";
import footerLogo from "../../Images/footerLogo.png";
import apple from "../../Images/apple.jpg";
import googleplay from "../../Images/googleplay.jpg";

const Footer = () => {
    return (
        <>
            <Row className="footer g-0">
                <Container className="container">
                    <Col className="footer__logo">
                        <Link to="">
                            <Image src={footerLogo} width="70"/>
                        </Link>
                    </Col>
                    <Row>
                        <Col md={6} lg={4} className="footer__part">
                            <h3 className="footer__title">Explore</h3>
                            <Stack direction="vertical">
                                <Link to="" className="footer__item">Home</Link>
                                <Link to="" className="footer__item">About us</Link>
                                <Link to="" className="footer__item">Mission Vision & Values</Link>
                                <Link to="" className="footer__item">Our Promise</Link>
                                <Link to="" className="footer__item">Services</Link>
                                <Link to="" className="footer__item">Fleet</Link>
                                <Link to="" className="footer__item">Contact Us</Link>
                            </Stack>
                        </Col>
                        <Col md={6} lg={4} className="footer__part">
                            <h3 className="footer__title">More</h3>
                            <Stack direction="vertical">
                                <Link to="" className="footer__item">Blog / News</Link>
                                <Link to="" className="footer__item">Locate Us</Link>
                            </Stack>
                        </Col>
                        <Col md={6} lg={4} className="footer__part">
                            <h3 className="footer__title">Contact</h3>
                            <Stack direction="vertical">
                                <Link to="" className="footer__item">Hotline: 600530005</Link>
                                <Link to="" className="footer__item">Head Office: +9714 39 777 46</Link>
                                <Link to="" className="footer__item">Email: info@royalsmartlimousine.com</Link>
                                <Stack direction="horizontal" className="footer__iconBox">
                                    <Link to="" className="footer__icon">f</Link>
                                    <Link to="" className="footer__icon">t</Link>
                                    <Link to="" className="footer__icon">i</Link>
                                    <Link to="" className="footer__icon">l</Link>
                                </Stack>
                                <Stack direction="horizontal" gap={1} className="footer__mobileApp">
                                    <Image src={apple} width="134"/>
                                    <Image src={googleplay} width="134"/>
                                </Stack>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className="footer__two g-0">
                <Container className="container">
                    <Col md={4} lg={6}>
                        <p className="footer__two__text">
                            Copyright © 2023. Royal Smart Limousine. All Rights Reserved
                        </p>
                    </Col>
                    <Col md={4} lg={6}>
                        <p className="footer__two__text">Member of Rashid Al Jabri Group of Companies</p>
                    </Col>
                </Container>
            </Row>
        </>
    );
};

export default Footer;