import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/header";
import { routesConstants } from "../../../pages/routes.constant";
import { StyledSignInContainer } from "./SignIn.form.styled";

import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const SignIn = (): JSX.Element => {
  const { t } = useTranslation("common");
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  const renderredStep = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <Step1 onSuccess={() => setStep(2)} onFailed={() => setStep(2)} />
        );
      case 2:
        return (
          <Step2
            onSuccess={() => setStep(step + 1)}
            onFailed={() => setStep(step)}
          />
        );
      case 3:
        return (
          <Step3
            onSuccess={() => navigate(routesConstants.root)}
            onFailed={() => setStep(step)}
          />
        );
      default:
        return (
          <Step1 onSuccess={() => setStep(2)} onFailed={() => setStep(2)} />
        );
    }
  }, [step]);
  return (
    <StyledSignInContainer>
      <Header className="d-flex justify-content-center">
        <h4 className="text-uppercase text-primary">
          {t("auth.header.signIn")}
        </h4>
      </Header>
      {renderredStep}
    </StyledSignInContainer>
  );
};
