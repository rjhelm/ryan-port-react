import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
    RiCodeBoxFill,
    RiHomeSmile2Line,
    RiSkull2Fill,
    RiVipDiamondLine,
    RiGithubFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../src/Assets/logo-transparent.png";

const NavBar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    };

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                ></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <RiHomeSmile2Line /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <RiSkull2Fill /> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <RiCodeBoxFill /> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <RiVipDiamondLine /> Resume
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://github.com/rjhelm/Portfolio"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <RiGithubFill style={{ fontSize: "1.5em" }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;