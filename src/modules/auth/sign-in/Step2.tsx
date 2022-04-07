import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComment } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { SignInStepProps } from "./SignIn.form.type";
import { StyledSignInStep } from "./SignIn.form.styled";

export const Step2 = ({ onSuccess }: SignInStepProps): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <StyledSignInStep
      initial={{ x: "-500px" }}
      animate={{ translateX: "500px" }}
      transition={{ stiffness: 150 }}
    >
      <h6 className="d-flex justify-content-center fw-normal mb-3 mt-2">
        {t("auth.verify2fa")}
      </h6>
      <ListGroup className="d-grid gap-2">
        <ListGroup.Item
          action
          onClick={onSuccess}
          variant="primary"
          className="p-3 d-flex flex-row"
        >
          <FontAwesomeIcon icon={faComment} />
          <span className="ps-3">{t("auth.text")}</span>
        </ListGroup.Item>

        <ListGroup.Item
          action
          variant="primary"
          onClick={onSuccess}
          className="p-3 d-flex flex-row"
        >
          <FontAwesomeIcon icon={faPhone} />
          <span className="ps-3">{t("auth.call")}</span>
        </ListGroup.Item>
      </ListGroup>
    </StyledSignInStep>
  );
};
