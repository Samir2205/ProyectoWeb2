import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-white py-4 bg-dark">
      <Container>
        <Row>
          <Col md="4">
            <h5>CinePol</h5>
            <p>
              Disfruta de la mejor experiencia cinematográfica con nosotros.
              Reserva tus entradas y descubre los próximos estrenos.
            </p>
          </Col>
          <Col md="4">
            <h5>Navegación</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="/" className="text-white">
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/all-movies" className="text-white">
                  Películas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reservation" className="text-white">
                  Reservas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reviews" className="text-white">
                  Reseñas
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="4">
            <h5>Síguenos</h5>
            <Nav>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com"
                  target="_blank"
                  className="text-white"
                >
                  <FaFacebook size={24} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.twitter.com"
                  target="_blank"
                  className="text-white"
                >
                  <FaTwitter size={24} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-white"
                >
                  <FaInstagram size={24} />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} CinePol, Samir Elias Aruquipa Ticona.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
