import { Col, Row, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { StyledButton as Button } from "../../../components/button";
import { routesConstants } from "../../../pages/routes.constant";
import { SignInStepProps } from "./SignIn.form.type";
import { StyledSignInStep } from "./SignIn.form.styled";

export const Step1 = ({
  onSuccess,
}: //   onFailed,
SignInStepProps): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <StyledSignInStep
      initial={{ x: "-500px" }}
      animate={{ translateX: "500px" }}
      transition={{ stiffness: 150 }}
    >
      <Form className="pt-3 px-1">
        <InputGroup className="mb-4">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} />
          </InputGroup.Text>
          <Form.Control
            name="email"
            placeholder={t("auth.placeholder.email")}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faLock} />
          </InputGroup.Text>
          <Form.Control
            name="password"
            placeholder={t("auth.placeholder.password")}
            type="password"
          />
        </InputGroup>
        <Row className="mb-3">
          <Col className="align-self-start">
            <Form.Text>
              <Form.Check
                label={t("auth.rememberMe")}
                type="checkbox"
                id="remember"
              />
            </Form.Text>
          </Col>
        </Row>
        <div className="d-grid">
          <Button
            variant="primary"
            btnTitle={t("auth.signInBtn")}
            type="button"
            onClick={onSuccess}
          />
        </div>
        <div className="d-flex justify-content-center mt-2 mb-2">
          <Form.Text>
            {t("auth.notRegistered")}{" "}
            <a href={routesConstants.auth.register}>
              {t("auth.createNewAccount")}
            </a>
          </Form.Text>
        </div>
      </Form>
    </StyledSignInStep>
  );
};
