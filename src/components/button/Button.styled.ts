import styled from "styled-components";
import { commonColors } from "../../themes";

import { Button } from "./Button";

export const StyledButton = styled(Button)`
  padding: 0.25rem !important;
  border-radius: 0.25rem;
  border: 1px solid
    ${(props) => {
      if (props.outlined) return props.theme.colors.borderColor;
      switch (props.variant) {
        case "primary":
          return props.theme.colors.primary;
        case "secondary":
          return props.theme.colors.secondary;
        default:
          return props.theme.colors.default;
      }
    }};
  color: ${(props) =>
    props.outlined ? props.theme.colors.textColor : commonColors.light};
  background-color: ${(props) => {
    if (props.outlined) return props.theme.colors.background;
    switch (props.variant) {
      case "primary":
        return props.theme.colors.primary;
      case "secondary":
        return props.theme.colors.secondary;
      default:
        return props.theme.colors.default;
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return props.theme.colors.hoverPrimary;
        case "secondary":
          return props.theme.colors.hoverSecondary;
        default:
          return props.theme.colors.hoverDefault;
      }
    }};
  }
`;
