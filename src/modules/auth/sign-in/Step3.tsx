import { Col, Row, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { StyledButton as Button } from "../../../components/button";
import { routesConstants } from "../../../pages/routes.constant";
import { SignInStepProps } from "./SignIn.form.type";
import { commonColors } from "../../../themes";

const Step3 = ({
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
        Please enter the code sent to your phone.
      </h6>
      <Form>
        <InputGroup className="my-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faPhone} />
          </InputGroup.Text>
          <Form.Control
            name="password"
            placeholder="Enter your code"
            type="password"
          />
        </InputGroup>
        <div className="d-grid">
          <Button
            variant="primary"
            btnTitle={t("auth.signInBtn")}
            type="button"
            onClick={onSuccess}
          />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <Form.Text>
            {t("auth.notRegistered")}{" "}
            <a href={routesConstants.auth.register}>
              {t("auth.createNewAccount")}
            </a>
          </Form.Text>
        </div>
      </Form>
    </motion.div>
  );
};

export default Step3;
