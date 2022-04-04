import { ButtonProps } from "./Button.type";

export const Button = ({ btnTitle, ...props }: ButtonProps): JSX.Element => {
  //TODO: Add className for button variants
  return <button {...props}>{btnTitle}</button>;
};
