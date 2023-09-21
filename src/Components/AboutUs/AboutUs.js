import React from 'react';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import "./AboutUs.css";
import ceo from "../../Images/ceo.png";
import coo from "../../Images/coo.png";

const AboutUs = () => {
    return (
        <>
            <section className="page-title-banner">
                <Container className="container">
                    <Col className="d-flex justify-content-center">
                        <h2 className="page-title">About Us</h2>
                    </Col>
                </Container>
            </section>
            <section className="about__one">
                <Container className="container">
                    <Row>
                        <Col md={12} lg={6}>
                            <Image src={ceo} alt="" className="about__img"/>
                        </Col>
                        <Col md={12} lg={6}>
                            <h2 className="about__title">ABOUT US</h2>
                            <p className="about__text">
                                Royal Smart Limousine LLC (formerly known as Royal Luxury Transport LLC) is a member of
                                the Rashid Al Jabri Group of Companies. It was founded by Rashid Al Jabri in the year
                                2002 to cater for the growing need of luxurious, reliable, and readily available
                                transport in the growing local and expat community by providing 24-hour limousine
                                service.
                            </p>
                            <p className="about__text">
                                In the year 2015, the CEO, Rashid Al Jabri, combined Dubai’s remarkable foundation of
                                traditional values, development, and technology with his passion for adventure,
                                innovation, superior customer service and life-long entrepreneurial spirit, making a
                                brilliant decision to rebrand the traditional classic transport business to a smarter,
                                more current, trendy and forward looking luxury transportation service while maintaining
                                the exceptional personalized, high-level and quality driven foundation bringing forth
                                the new company slogan - ‘The Smart Experience.’
                            </p>
                            <p className="about__text">
                                Royal Smart Limousine LLC has grown from a 30-vehicle limousine service to a full
                                chauffeured service transportation company providing close to 500 top-notch service
                                fleet to a vast array of clientele utilizing almost every type of luxury vehicle
                                available in the chauffeured limousine services industry. The company has become the
                                most innovative luxury transport service in the industry constantly updating its
                                operations with the latest technologies, software, computers, vehicles and not
                                forgetting its fully trained, dedicated employees assuring clients of a Smart Experience
                                throughout.
                            </p>
                            <p className="about__text">
                                We invite you to ‘The Smart Experience’ in the spirit of Dubai’s vision, optimism,
                                commitment, and world-class development.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about__two">
                <Container className="container">
                    <h2 className="about__title text-center about__two__title">MISSION</h2>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="about__two__imgBox">
                                <Image src={coo} alt="" className="about__img"/>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <p className="about__text">
                                At Royal Smart Limousine, we aim to provide affordable, high-quality, and luxurious
                                transportation services to our clients. Looking forward to exceeding their expectations
                                by delivering customized, reliable, and professional services that fulfill their needs.
                            </p>
                            <p className="about__text">
                                Through our journey, we realized how it is important to provide clients with comfortable
                                and stress-free rides, which motivated us to offer a fleet of chauffeured luxury
                                vehicles to provide a seamless and enjoyable ride.
                            </p>
                            <p className="about__text">
                                The skills of our chauffeurs are exceptional from the point of professionalism and
                                experience to guarantee our clients' travel needs are met with the utmost care and
                                attention.
                            </p>
                            <p className="about__text">
                                With our commitment to providing our clients with an exceptional and affordable
                                experience, we never compromise quality or luxury. Our goal is to become the go-to
                                transportation service provider for malls, hotels, corporates, individuals, and groups
                                seeking premium transportation services at an affordable price.
                            </p>
                            <p className="about__text">
                                RSL believes in delivering the best value for our clients within their budget is the
                                path to creating lasting relationships based on trust, integrity, and exceptional
                                service.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about__three">
                <Container className="container">
                    <h2 className="about__title text-center about__two__title">VISION</h2>
                    <Row>
                        <p className="about__text">
                            Our vision at Royal Smart Limousine is to become a leading provider of luxurious
                            transportation services worldwide. We are committed to a set of standards in our journey
                            for excellence in the transportation industry by delivering world-class services and
                            continuous development.
                        </p>
                        <p className="about__text">
                            We visualize a future where our services are recognized globally, and our brand is the
                            mark for quality, luxury, and affordability. We are committed to expanding our reach and
                            providing our services to clients in various sectors, including corporate, events, kids,
                            enterprise, and private transportation.
                        </p>
                        <p className="about__text">
                            We depend on technology and innovation to provide our clients with the utmost
                            transportation experience. We are constantly investing in our fleet and chauffeurs to
                            ensure that we remain at the top of the transportation industry.
                        </p>
                        <p className="about__text">
                            We are working to set the name of RSL to be the preferred transportation service
                            provider for clients around the world who demand exceptional service and luxurious
                            vehicles.
                        </p>
                    </Row>
                </Container>
            </section>
            <section className="about__four">
                <Container className="container">
                    <h2 className="about__title text-center about__two__title">OUR PROMISE</h2>
                    <Row>
                        <p className="about__text">
                            We are dedicated to provide you with only the latest, safest, and most comfortable vehicles
                            with the latest technologies, sophisticated features and amenities guaranteed to elevate
                            your travel experience to a new level of excellence and an unforgettable experience for you
                            and your guests. To strengthen our promise and enhance you comfort and safety, Royal Smart
                            Limousine LLC offers the following professional services and amenities:
                        </p>
                        <div className="container">
                            <ul className="about__list">
                                <li className="about__text">
                                    <p>
                                        Highly-trained chauffeurs and customer service representatives
                                    </p>
                                </li>
                                <li className="about__text">
                                    <p>
                                        Immaculately maintained vehicles
                                    </p>
                                </li>
                                <li className="about__text">
                                    <p>
                                        Clean and comfortable vehicles
                                    </p>
                                </li>
                                <li className="about__text">
                                    <p>
                                        On-time-every-time guarantee
                                    </p>
                                </li>
                                <li className="about__text">
                                    <p>
                                        Additional amenities including: Infant and child seats, free Wi-Fi, bottled
                                        water, newspaper, etc.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutUs;