import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnTitle?: ReactNode;
  variant?: "primary" | "secondary" | "default";
}
