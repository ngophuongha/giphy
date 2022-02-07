import { Fragment } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

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
            <Nav className="align-items-center">
              <Switch
                checked={true}
                onChange={() => {
                  //
                }}
                height={25}
                checkedIcon={
                  <FontAwesomeIcon
                    icon={faSun}
                    className="h-100 w-100 p-1"
                    color="#ffa701"
                  />
                }
                uncheckedIcon={
                  <FontAwesomeIcon icon={faMoon} className="h-100 w-100" />
                }
                onColor="#888"
              />
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
