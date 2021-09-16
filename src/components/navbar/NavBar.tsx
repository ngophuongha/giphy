import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Fragment } from "react";

export const NavBar = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" variant="light" className="border-bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/giphy-logo-1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GIPHY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Reactions</Nav.Link>
              <Nav.Link href="#">Entertainment</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Sign up</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
