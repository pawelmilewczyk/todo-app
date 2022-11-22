import { ChangeEventHandler } from "react";

interface CheckboxProps {
  label?: string;
  labelPlacement?: "left" | "right";
  defaultChecked?: boolean;
  name?: string;
  id?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({
  label,
  labelPlacement = "right",
  name = label?.toLowerCase(),
  id = name,
  ...props
}: CheckboxProps) {
  return (
    <div className="flex gap-x-3 items-center p-4">
      {labelPlacement === "left" && (
        <label htmlFor={id} className="text-white">
          {label}
        </label>
      )}
      <input
        type="checkbox"
        id={id}
        name={name}
        className="w-5 h-5 rounded-full bg-transparent appearance-none cursor-pointer border border-white outline-none 
        checked:bg-white checked:outline checked:outline-1 checked:outline-white checked:border-transparent"
        {...props}
      />
      {labelPlacement === "right" && (
        <label htmlFor={id} className="text-white">
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
