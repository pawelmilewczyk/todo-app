"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "consts/style";
import { ChangeEventHandler, useState } from "react";
import { InputProps } from "types/ui/input";

function Input({
  label,
  name,
  id = name,
  defaultValue,
  onChange,
  type,
  value: initValue,
  ...props
}: InputProps) {
  const [value, setValue] = useState(initValue ?? defaultValue ?? "");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const clearValue = () => setValue("");

  const textColor = `text-${!value ? colors.gray : colors.white}`;

  return (
    <div className="relative flex flex-col gap-1 items-start">
      <label className="px-1 text-xs" htmlFor={id}>
        {label}
      </label>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={clearValue}
        className=" w-4 h-4 absolute bottom-[0.7rem] right-1 p-1 z-10 cursor-pointer rounded-full hover:bg-zinc-500"
      />
      <input
        id={id}
        name={name}
        aria-label={label}
        type={type}
        value={value}
        onChange={handleChange}
        className={`bg-zinc-600 ${textColor} p-2 pr-8 rounded-md border border-zinc-600 block w-full outline-none focus:border-zinc-400`}
        {...props}
      />
    </div>
  );
}

export default Input;
