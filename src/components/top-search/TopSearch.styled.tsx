import styled from "styled-components";
import { FormControl } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export const StyledFormControl = styled(FormControl)`
  background-color: ${({ theme }) => theme.colors.background} !important;
  color: ${({ theme }) => theme.colors.textColor} !important;
`;

export const StyledSuggestion = styled(DropdownMenu)`
  //margin-top: 47px;
  //width: 100%;
  border: 1px solid #d3d3d3;
  position: inherit;
`;
