"use client";

import { colors } from "consts/style";
import ChevronIcon from "icons/ChevronIcon";
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useState,
} from "react";

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  options: { id: string; name: string }[];
}

function Select({
  options: initOptions,
  label,
  name,
  id = name,
  defaultValue,
  placeholder,
  ...props
}: SelectProps) {
  const [value, setValue] = useState(defaultValue);

  const options = placeholder
    ? [
        {
          name: placeholder,
          id: "select_placeholder",
        },
        ...initOptions,
      ]
    : initOptions;

  const onChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setValue(value);
  };

  return (
    <div className="relative flex flex-col gap-1">
      <label className="px-1 text-xs" htmlFor={id}>
        {label}
      </label>
      <span className="absolute top-8 right-3 z-10 -rotate-90 pointer-events-none">
        <ChevronIcon />
      </span>
      <select
        id={id}
        name={name}
        aria-label={label}
        value={value}
        onChange={onChange}
        style={{ color: placeholder && !value ? colors.gray : colors.white }}
        className="relative bg-zinc-600 p-2 rounded-md border border-zinc-600 block w-full outline-none appearance-none
        focus:border-zinc-400"
        {...props}
      >
        {options.map(({ id, name }) => (
          <option key={id} value={name !== placeholder ? name : ""}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
