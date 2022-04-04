import styled from "styled-components";
import { Button } from "./Button";

export const StyledButton = styled(Button)`
  padding: 0.5rem !important;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.default};
  .btn-primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .btn-secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground} !important;
    color: ${({ theme }) => theme.colors.hoverTextColor} !important;
  }
`;
