import { InputGroup, FormControl, Col, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComment } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { SignInStepProps } from "./SignIn.form.type";

const Step2 = ({
  onSuccess,
}: //   onFailed,
SignInStepProps): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
      <h6 className="d-flex justify-content-center fw-normal mb-3 mt-2">
        Verify it is you by one of the following:
      </h6>

      <ListGroup>
        <ListGroup.Item
          action
          onClick={onSuccess}
          className="p-3 d-flex flex-row"
          as={Row}
        >
          {/* <Col sm={2}>
            <FontAwesomeIcon icon={faComment} className="pe-3" />
          </Col> */}
          <Col sm={9}>Text +XX XXXXXX123</Col>
        </ListGroup.Item>

        <ListGroup.Item action onClick={onSuccess} className="p-3" as={Row}>
          {/* <Col sm={2}>
            <FontAwesomeIcon icon={faPhone} className="pe-3" />
          </Col> */}
          <Col sm={9}>Call +XX XXXXXX123</Col>
        </ListGroup.Item>
      </ListGroup>
      {/* <InputGroup onClick={onSuccess} className="mb-3">
        <InputGroup.Text>
          {" "}
          <FontAwesomeIcon icon={faComment} className="pe-3" />
        </InputGroup.Text>
        <FormControl placeholder="Text +XX XXXXXX123" />
      </InputGroup>
      <InputGroup onClick={onSuccess}>
        <InputGroup.Text>
          {" "}
          <FontAwesomeIcon icon={faPhone} className="pe-3" />
        </InputGroup.Text>
        <FormControl placeholder="Call +XX XXXXXX123" />
      </InputGroup> */}
    </motion.div>
  );
};

export default Step2;
