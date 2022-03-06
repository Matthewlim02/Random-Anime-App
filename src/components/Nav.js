import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function NavHeader() {
    return (
      <Navbar bg="dark" variant="dark" className="mainNav">
      <Container>
      <h2>
        <Link to='/' className="home">Home</Link>
      </h2>
      <Nav className="me-auto">
            <ul className="navUL">
                <Link to='/anime' className="navLink">
                  <li>Anime</li>
                </Link>
                <Link to='/about' className="navLink">
                  <li>About</li>
                </Link>
            </ul>
      </Nav>
      </Container>
    </Navbar>
    );
}

export default NavHeader;
