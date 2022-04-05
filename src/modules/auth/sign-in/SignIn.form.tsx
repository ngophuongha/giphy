import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Header } from "../../../components/header";

import { Step1 } from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export const SignIn = (): JSX.Element => {
  const { t } = useTranslation("common");
  const [step, setStep] = useState<number>(1);
  const renderredStep = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <Step1
            onSuccess={() => setStep(step + 1)}
            onFailed={() => setStep(step)}
          />
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
            onSuccess={() => setStep(step + 1)}
            onFailed={() => setStep(step)}
          />
        );
      default:
        return (
          <Step1
            onSuccess={() => setStep(step + 1)}
            onFailed={() => setStep(step)}
          />
        );
    }
  }, [step]);
  return (
    <>
      <Header className="d-flex justify-content-center">
        <h4 className="text-uppercase text-primary">
          {t("auth.header.signIn")}
        </h4>
      </Header>
      {renderredStep}
    </>
  );
};
