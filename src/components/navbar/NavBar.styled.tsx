import styled from "styled-components";
import { screens } from "../../themes";

export const StyledNav = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
  }
  @media only screen and (max-width: ${screens.lg}) {
    a {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;
