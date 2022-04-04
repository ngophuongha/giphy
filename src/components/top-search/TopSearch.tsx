import { useTranslation } from "react-i18next";
import InputGroup from "react-bootstrap/InputGroup";
import { StyledFormControl } from "./TopSearch.styled";
import { StyledButton as Button } from "../button";
export const TopSearch = (): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <InputGroup className="my-4">
      <StyledFormControl
        placeholder={t("searchPlaceholder")}
        aria-label="gif-sticker-search"
      />
      <Button id="search-btn" btnTitle={t("searchBtn")} />
    </InputGroup>
  );
};
