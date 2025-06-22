import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>FOUR</h5>
            <p>The best Furniture just for you.</p>
            <p>The best Furniture just in FOUR.</p>
          </Col>

          <Col md={4}>
            <h5>Link</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Product</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@FOUR.com</p>
            <p>Telp: +62 812-3456-7890</p>
          </Col>
        </Row>

        <hr className="border-light" />
        
        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} FOUR. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
