import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Nav, Navbar, Container } from "react-bootstrap";

import { ThemeToggler } from "../theme-toggler";
import { StyledNav } from "./NavBar.styled";

export const NavBar = (): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="border-bottom"
      >
        <Container>
          <StyledNav href="#home">
            <img
              alt=""
              src="/giphy-logo-1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GIPHY
          </StyledNav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <StyledNav href="#">{t("navbar.reactions")}</StyledNav>
              <StyledNav href="#">{t("navbar.entertainment")}</StyledNav>
            </Nav>
            <Nav className="flex-row align-items-center">
              <ThemeToggler />
              <StyledNav href="#">{t("navbar.signIn")}</StyledNav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
