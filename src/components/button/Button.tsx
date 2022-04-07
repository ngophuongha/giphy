import { ButtonProps } from "./Button.type";

export const Button = ({ btnTitle, ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} role="button">
      {btnTitle}
    </button>
  );
};
