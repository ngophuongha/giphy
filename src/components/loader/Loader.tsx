import { Placeholder, Card, Row, Col } from "react-bootstrap";
import { useWindowDimensions } from "../../utils/getScreenSize";
import {
  LARGE_SCREEN_COL,
  MEDIUM_SCREEN_COL,
  SMALL_SCREEN_COL,
} from "../../constants/variables";

export const Loader = (): JSX.Element => {
  const { colNum } = useWindowDimensions();
  return (
    <Row
      xl={LARGE_SCREEN_COL}
      md={MEDIUM_SCREEN_COL}
      xs={SMALL_SCREEN_COL}
      className="g-2"
    >
      {Array.from(Array(colNum).keys()).map(() => (
        <Col>
          <LazyLoader />
        </Col>
      ))}
    </Row>
  );
};

export const LazyLoader = (): JSX.Element => {
  return (
    <Card className="mt-2">
      <Card.Img variant="top" src="placeholder-img.png" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};
