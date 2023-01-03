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
          className={`flex items-center justify-self-center rounded-full p-2 focus-within:bg-zinc-600 ${color}`}
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
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer flex items-center justify-center uppercase rounded-full outline outline-offset-2 outline-transparent bg-current peer-checked:outline-current peer-checked:outline"
          />
        </div>
      ))}
    </div>
  );
}

export default GroupColorPicker;
