import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
  label: string;
  defaultValue?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
}

function TextField({
  label,
  name = label.toLowerCase(),
  id = name,
  ...props
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="px-1 text-xs" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        className="bg-zinc-600 p-2 rounded-md border border-zinc-600 block w-full focus:border-zinc-300  outline-none"
        {...props}
      />
    </div>
  );
}

export default TextField;
