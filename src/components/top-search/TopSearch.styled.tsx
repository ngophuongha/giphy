import styled from "styled-components";
import { FormControl } from "react-bootstrap";

export const StyledFormControl = styled(FormControl)`
  background-color: ${({ theme }) => theme.colors.background} !important;
  color: ${({ theme }) => theme.colors.textColor} !important;
`;
