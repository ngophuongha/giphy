import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.background} !important;
`;
