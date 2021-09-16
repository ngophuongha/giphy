import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export const TopSearch = (): JSX.Element => {
  return (
    <InputGroup className="my-4">
      <FormControl
        placeholder="Search all the GIFs and Stickers"
        aria-label="gif-sticker-search"
      />
      <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
    </InputGroup>
  );
};
