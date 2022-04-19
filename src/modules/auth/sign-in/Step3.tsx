import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../../store/hooks";
import { StyledButton as Button } from "../../../components/button";
import { routesConstants } from "../../../pages/routes.constant";
import { SignInStepProps } from "./SignIn.form.type";

import { StyledSignInStep } from "./SignIn.form.styled";
import { setAuth } from "../../../store/auth/auth";
export const Step3 = ({
  onSuccess,
}: //   onFailed,
SignInStepProps): JSX.Element => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const setAuthInfo = async () => {
    await dispatch(
      setAuth({
        name: "Ha Ngo Phuong",
        avatar: "",
      })
    );
    onSuccess();
  };

  return (
    <StyledSignInStep
      initial={{ x: "-500px" }}
      animate={{ translateX: "500px" }}
      transition={{ stiffness: 150 }}
    >
      <h6 className="d-flex justify-content-center fw-normal mb-3 mt-2">
        {t("auth.enterCode")}
      </h6>
      <Form>
        <InputGroup className="my-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faPhone} />
          </InputGroup.Text>
          <Form.Control
            name="password"
            placeholder={t("auth.placeholder.enterCode")}
            type="password"
          />
        </InputGroup>
        <div className="d-grid">
          <Button
            variant="primary"
            btnTitle={t("auth.signInBtn")}
            type="submit"
            onClick={setAuthInfo}
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
    </StyledSignInStep>
  );
};
