import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export interface Option {
  id: string;
  name: string;
}

export interface SelectProps<T extends Option>
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "defaultValue" | "value"
  > {
  label: string;
  options: T[];
  defaultValue?: T;
  value?: T;
}
