import { ButtonHTMLAttributes } from "react";

export type ButtonColor = "default" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: ButtonColor;
}
