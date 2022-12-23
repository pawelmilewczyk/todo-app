"use client";

import { colors } from "consts/style";
import CloseIcon from "icons/CloseIcon";
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

function Input({
  label,
  name,
  id = name,
  defaultValue,
  onChange,
  type,
  ...props
}: InputProps) {
  const [value, setValue] = useState(defaultValue ?? "");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const clearValue = () => setValue("");

  return (
    <div className="relative flex flex-col gap-1">
      <label className="px-1 text-xs" htmlFor={id}>
        {label}
      </label>
      <span
        className="absolute z-10 top-[1.8rem] right-1 cursor-pointer hover:bg-zinc-500 p-1 rounded-full transition-colors"
        onClick={clearValue}
      >
        <CloseIcon />
      </span>
      <input
        id={id}
        name={name}
        aria-label={label}
        type={type}
        value={value}
        onChange={handleChange}
        style={{ color: !value && !props.value ? colors.gray : colors.white }}
        className="bg-zinc-600 p-2 pr-8 rounded-md border border-zinc-600 block w-full outline-none focus:border-zinc-400"
        {...props}
      />
    </div>
  );
}

export default Input;
