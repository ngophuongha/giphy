import { faLanguage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { Col, Dropdown } from "react-bootstrap";

import i18n from "../../i18n";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { languageChange, LanguageType } from "../../store/language/language";
import {
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledToggler,
} from "./LanguageSelector.styled";

export const LanguageSelector = (): JSX.Element => {
  const currentLanguage = useAppSelector(({ language }) => language.language);
  const dispatch = useAppDispatch();
  const changeLanguage = useCallback(
    (lang: LanguageType) => {
      dispatch(languageChange(lang));
      i18n.changeLanguage(lang);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLanguage]
  );

  return (
    <Dropdown>
      <StyledToggler className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={faLanguage}
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
      </StyledToggler>
      <StyledDropdownMenu>
        <StyledDropdownItem onClick={() => changeLanguage(LanguageType.EN)}>
          <Col sm={3}>
            {currentLanguage === LanguageType.EN && (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </Col>
          <Col sm={9}>Eglish</Col>
        </StyledDropdownItem>
        <StyledDropdownItem onClick={() => changeLanguage(LanguageType.FR)}>
          <Col sm={3}>
            {currentLanguage === LanguageType.FR && (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </Col>

          <Col>Français</Col>
        </StyledDropdownItem>
      </StyledDropdownMenu>
    </Dropdown>
  );
};
