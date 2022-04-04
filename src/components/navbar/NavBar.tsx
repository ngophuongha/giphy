import { Fragment } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import { ThemeToggler } from "../theme-toggler";
import { StyledNavBrand, StyledNavLink } from "./NavBar.styled";

export const NavBar = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="border-bottom p-3"
      >
        <Container>
          <StyledNavBrand href="#home">
            <img
              alt=""
              src="/giphy-logo-1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GIPHY
          </StyledNavBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <StyledNavLink href="#">Reactions</StyledNavLink>
              <StyledNavLink href="#">Entertainment</StyledNavLink>
            </Nav>
            <Nav className="align-items-center">
              <ThemeToggler />
              <StyledNavLink eventKey={2} href="#">
                Sign in
              </StyledNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
