import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Paths } from "../../portfolio";
import logo from "../../Assets/logo-transparent-png.png";
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css';

import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container fluid className="p-0">
        <Navbar.Brand>
          <Nav.Link
            as={Link}
            to={Paths.home}
            onClick={() => updateExpanded(false)}
          >
            <img
              src={logo}
              width="300"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to={Paths.home} onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={Paths.workExperience}
                onClick={() => updateExpanded(false)}
              >
                work experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to={Paths.skills}
                onClick={() => updateExpanded(false)}
              >
                education & skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={Paths.projectPage}
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        {/* Dropdown Menu */}
        <Dropdown className="d-md-none">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={Paths.home}>Home</Dropdown.Item>
            <Dropdown.Item as={Link} to={Paths.workExperience}>Work Experience</Dropdown.Item>
            <Dropdown.Item as={Link} to={Paths.skills}>Education & Skills</Dropdown.Item>
            <Dropdown.Item as={Link} to={Paths.projectPage}>Projects</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default NavBar;
