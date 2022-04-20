import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import debounce from "lodash.debounce";

import { InputGroup, Dropdown } from "react-bootstrap";

import {
  StyledFormControl,
  StyledSuggestion,
} from "../../components/top-search/TopSearch.styled";
import { StyledButton as Button } from "../../components/button";
import { getSuggestedItems } from "./service/Topsearch.service";

export const TopSearch = (): JSX.Element => {
  const { t } = useTranslation("common");
  const [visible, setVisible] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);

  const openDropdown = () => setVisible(true);

  const fetchDropdownOptions = async (key: string) => {
    const options = await getSuggestedItems(key);
    setDropdownOptions(options);
  };

  const debounceDropdown = useCallback(
    debounce((nextValue: string) => fetchDropdownOptions(nextValue), 1000),
    []
  );

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    debounceDropdown(value);
  };

  return (
    <div className="d-flex w-100">
      <div className="d-flex w-100">
        <InputGroup className="my-4">
          <div className="d-flex w-100 flex-column">
            <StyledFormControl
              placeholder={t("searchPlaceholder")}
              aria-label="gif-sticker-search"
              value={keyword}
              onChange={handleInputOnChange}
              onClick={openDropdown}
            />

            <Dropdown show={visible}>
              <StyledSuggestion>
                {dropdownOptions.map((value) => (
                  <Dropdown.Item key={value}>{value}</Dropdown.Item>
                ))}
              </StyledSuggestion>
            </Dropdown>
          </div>
        </InputGroup>
      </div>
      <div>
        <Button
          id="search-btn"
          btnTitle={t("searchBtn")}
          outlined
          className="mt-4"
        />
      </div>
    </div>
  );
};
