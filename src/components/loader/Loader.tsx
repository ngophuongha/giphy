import Spinner from "react-bootstrap/Spinner";

export const Loader = (): JSX.Element => {
  return (
    <Spinner animation="grow" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
