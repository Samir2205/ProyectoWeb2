// src/components/NavigationMenu.js
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="fixed-top bg-danger">
        <NavbarBrand tag={Link} to="/">
          CinePol
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                tag={Link}
                to="/"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Inicio
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/all-movies"
                onClick={() => setIsOpen(false)}
              >
                Películas
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/reservation"
                onClick={() => setIsOpen(false)}
              >
                Reservas
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/reviews"
                onClick={() => setIsOpen(false)}
              >
                Reseña
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/showtimes"
                onClick={() => setIsOpen(false)}
              >
                Creditos
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationMenu;
