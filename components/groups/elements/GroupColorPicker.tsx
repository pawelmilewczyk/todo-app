import { groupColors } from "consts/style";
import { formatColorClasses } from "utils/colors";

interface Props {
  defaultColor: string;
}

function GroupColorPicker({ defaultColor }: Props) {
  const colors = Object.entries(formatColorClasses(groupColors, "text")).map(
    ([value, color]) => ({
      value,
      color,
    })
  );

  return (
    <div className="grid grid-cols-6">
      {colors.map(({ color, value }) => (
        <div
          key={value}
          className={`flex items-center justify-self-center rounded-lg p-2 ${color} hover:bg-zinc-600 transition-colors`}
        >
          <input
            type="radio"
            name="color"
            id={value}
            value={value}
            className="appearance-none peer"
            defaultChecked={defaultColor === value}
            required
          />
          <label
            htmlFor={value}
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer flex items-center justify-center uppercase rounded-md outline outline-offset-2 outline-transparent bg-current peer-checked:outline-current"
          />
        </div>
      ))}
    </div>
  );
}

export default GroupColorPicker;
