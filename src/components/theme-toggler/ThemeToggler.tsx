import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSwitch from "react-switch";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ThemeType, themeChange } from "../../store/theme/theme";

import { commonColors } from "../../themes";

export const ThemeToggler = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <ReactSwitch
      checked={currentTheme === ThemeType.Light}
      onChange={(checked: boolean) => {
        dispatch(themeChange(checked ? ThemeType.Light : ThemeType.Dark));
      }}
      height={25}
      checkedIcon={
        <FontAwesomeIcon
          icon={faSun}
          className="h-100 w-100 p-1"
          color={commonColors.toggleIcon}
        />
      }
      uncheckedIcon={
        <FontAwesomeIcon
          icon={faMoon}
          className="h-100 w-100 p-1"
          color={commonColors.toggleIcon}
        />
      }
      onColor={commonColors.toggleBackground}
      offColor={commonColors.toggleBackground}
    />
  );
};
