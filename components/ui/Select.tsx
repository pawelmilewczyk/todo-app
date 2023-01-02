"use client";

import { colorClasses } from "consts/style";
import ChevronIcon from "icons/ChevronIcon";
import { ChangeEventHandler, useState } from "react";
import { Option, SelectProps } from "types/ui/select";

function Select<T extends Option>({
  options: initOptions,
  label,
  name,
  id = name,
  defaultValue,
  placeholder,
  value: initValue,
  onChange,
  ...props
}: SelectProps<T>) {
  const [value, setValue] = useState(initValue ?? defaultValue ?? "");

  const options = placeholder
    ? [
        {
          name: placeholder,
          id: "select_placeholder",
        },
        ...initOptions,
      ]
    : initOptions;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const textColor =
    placeholder && !value ? colorClasses.text.gray : colorClasses.text.white;

  return (
    <div className="relative flex flex-col gap-1">
      {label && (
        <label className="px-1 text-xs" htmlFor={id}>
          {label}
        </label>
      )}
      <span className="absolute bottom-3 right-3 z-10 -rotate-90 pointer-events-none">
        <ChevronIcon />
      </span>
      <select
        id={id}
        name={name}
        aria-label={label}
        value={value}
        onChange={handleChange}
        className={`relative bg-zinc-600 ${textColor} p-2 rounded-md border border-zinc-600 block w-full outline-none appearance-none focus:border-zinc-400`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.id}
            value={option.name !== placeholder ? JSON.stringify(option) : ""}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
