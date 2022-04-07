import { Spinner } from "react-bootstrap";

import { Wrapper } from "../wrapper";

export const Suspender = (): JSX.Element => {
  return (
    <Wrapper>
      <Spinner animation="grow" />
    </Wrapper>
  );
};
