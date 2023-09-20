import React from 'react';
import {Button, Container, Image, Nav, Navbar, NavDropdown, Row, Stack} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Header.css";
import logo from "../../../Images/logo.png";
import brand from "../../../Images/brand.png";

const Header = () => {
    return (
        <>
            <div className="header">
                <Navbar expand="md" className="py-2 position-sticky d-flex">
                    <Container className="container">
                        <Stack direction="horizontal" gap={3}>
                            <Link to="" className="header__logo">
                                <Image src={logo} width="70" alt="" xs={{display: "none"}}/>
                            </Link>
                            <Link to="" className="header__logo me-3">
                                <Image src={brand} width="100" alt=""/>
                            </Link>
                        </Stack>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="align-items-md-center ms-auto flex-wrap">
                                <Link to="" className="header__items">Home</Link>
                                <Link to="" className="header__items">About Us</Link>
                                <Link to="" className="header__items">Services</Link>
                                <Link to="" className="header__items">Fleet</Link>
                                <Link to="" className="header__items">News & Events</Link>
                                <NavDropdown title="Be a Partner" id="basic-nav-dropdown" className="header__dropdown">
                                    <NavDropdown.Item href="#action/3.1">Be Our Driver/Investor</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-wrap">
                                        Be Our Corporate Partner
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Link to="" className="header__items">Contact</Link>
                                <Button className="header__btn d-md-none d-lg-block">BOOK ONLINE</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;