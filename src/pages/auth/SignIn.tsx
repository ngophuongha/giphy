import { Helmet } from "react-helmet";
import { AuthFormLayout } from "../../layouts/auth-form-layout/AuthFormLayout";
import { SignIn } from "../../modules/auth";

export const SignInPage = (): JSX.Element => {
  return (
    <AuthFormLayout>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <SignIn />
    </AuthFormLayout>
  );
};
