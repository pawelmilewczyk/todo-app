import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export interface Option {
  id: string;
  name: string;
}

export interface SelectProps<T extends Option>
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label?: string;
  options: T[];
}
