import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const StyledToggler = styled(Dropdown.Toggle).attrs({
  className: "btn-primary",
})`
  &&& {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
    border: ${({ theme }) => theme.colors.textColor};
  }
`;

export const StyledDropdownMenu = styled(Dropdown.Menu).attrs({
  className: "dropdown-menu",
})`
  &&& {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const StyledDropdownItem = styled(Dropdown.Item).attrs({
  className: "dropdown-item",
})`
  &&& {
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
    &&:hover {
      background-color: ${({ theme }) => theme.colors.hoverBackground};
      color: ${({ theme }) => theme.colors.hoverTextColor};
    }
  }
`;
