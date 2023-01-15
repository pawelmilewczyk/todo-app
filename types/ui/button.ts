import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { colors } from "consts/style";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: IconProp;
  color?: keyof typeof colors;
}
