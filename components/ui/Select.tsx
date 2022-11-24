import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  options: { id: number; name: string }[];
}

function Select({
  options,
  label,
  name = label.toLowerCase(),
  id = name,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="px-1 text-xs" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="bg-zinc-600 p-2 rounded-md border border-zinc-600 block w-full focus:border-zinc-300  outline-none"
        {...props}
      >
        {options.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
