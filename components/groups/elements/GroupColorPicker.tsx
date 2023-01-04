import { groupColors } from "consts/style";
import { NewGroupInterface } from "types/todos";
import { formatColorClasses } from "utils/colors";

function GroupColorPicker({
  color: defaultColor,
}: Pick<NewGroupInterface, "color">) {
  const colors = Object.entries(formatColorClasses(groupColors, "text")).map(
    ([value, color]) => ({
      value,
      color,
    })
  );

  return (
    <div className="grid grid-cols-4 xs:grid-cols-6 gap-y-4">
      {colors.map(({ color, value }) => (
        <div
          key={value}
          className={`flex items-center justify-self-center ${color}`}
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
            className="w-8 h-8 cursor-pointer flex items-center justify-center uppercase rounded-md outline outline-offset-2 outline-transparent bg-current peer-checked:outline-current peer-focus-visible:outline-zinc-400 peer-hover:outline-zinc-500 transition-colors"
          />
        </div>
      ))}
    </div>
  );
}

export default GroupColorPicker;
