import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  color: ${({ theme }) => theme.colors.textColor} !important;
`;

export default StyledContainer;
