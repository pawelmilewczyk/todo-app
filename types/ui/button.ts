import { ButtonHTMLAttributes } from "react";
import { Colors } from "types/colors";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: Colors;
}
