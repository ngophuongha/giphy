import InputGroup from "react-bootstrap/InputGroup";
import { StyledFormControl, StyledSearchBtn } from "./TopSearch.styled";

export const TopSearch = (): JSX.Element => {
  return (
    <InputGroup className="my-4">
      <StyledFormControl
        placeholder="Search all the GIFs and Stickers"
        aria-label="gif-sticker-search"
      />
      <StyledSearchBtn id="search-btn">Search</StyledSearchBtn>
    </InputGroup>
  );
};
