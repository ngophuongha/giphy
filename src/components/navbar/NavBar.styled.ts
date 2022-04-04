import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavBrand = styled(Navbar.Brand)`
  color: ${({ theme }) => theme.colors.textColor} !important;
`;

export const StyledNavLink = styled(Nav.Link)`
  color: ${({ theme }) => theme.colors.textColor} !important;
`;
