import { useState } from "react";

interface CheckboxProps {
  label?: string;
  labelPlacement?: "left" | "right";
  defaultChecked?: boolean;
  name?: string;
  id?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({
  label,
  labelPlacement = "right",
  name = label?.toLowerCase(),
  id = name,
  defaultChecked,
  onChange,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  const onClick = () => {
    setChecked((prev) => !prev);
    onChange(!checked);
  };

  const Label = () => (
    <label htmlFor={id} className="text-white p-4 pointer-events-none">
      {label}
    </label>
  );

  return (
    <div
      className="flex items-center px-4 focus-within:bg-zinc-500 cursor-pointer "
      onClick={onClick}
    >
      {labelPlacement === "left" && <Label />}
      <input
        type="checkbox"
        id={id}
        name={name}
        aria-label={label}
        checked={checked}
        readOnly
        className="w-5 h-5 flex-shrink-0 rounded-full bg-transparent appearance-none border border-white outline-none pointer-events-none
        checked:bg-white checked:outline checked:outline-1 checked:outline-white checked:border-transparent"
        {...props}
      />
      {labelPlacement === "right" && <Label />}
    </div>
  );
}

export default Checkbox;
