import styled from "styled-components";
import { Button, FormControl } from "react-bootstrap";

export const StyledFormControl = styled(FormControl)`
  background-color: ${({ theme }) => theme.colors.background} !important;
  color: ${({ theme }) => theme.colors.textColor} !important;
`;

export const StyledSearchBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background} !important;
  color: ${({ theme }) => theme.colors.textColor} !important;
  border-color: ${({ theme }) => theme.colors.borderColor} !important;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground} !important;
    color: ${({ theme }) => theme.colors.hoverTextColor} !important;
  }
`;
