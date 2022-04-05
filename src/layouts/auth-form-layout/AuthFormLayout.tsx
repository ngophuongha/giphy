import { AuthFormContainer, AuthFormWrapper } from "./AuthFormLayout.styled";

export const AuthFormLayout: React.FC = ({ children }) => {
  return (
    <AuthFormWrapper>
      <AuthFormContainer>{children}</AuthFormContainer>
    </AuthFormWrapper>
  );
};
