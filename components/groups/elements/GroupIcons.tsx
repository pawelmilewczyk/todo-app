import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupIcons } from "consts/groupIcons";
import { NewGroupInterface } from "types/todos";

function GroupIcons({ icon: defaultIcon }: Pick<NewGroupInterface, "icon">) {
  return (
    <div className="grid grid-cols-4 xs:grid-cols-6 gap-y-3">
      {Object.entries(groupIcons).map(([value, icon]) => (
        <label key={value} htmlFor={value} className="justify-self-center">
          <input
            type="radio"
            name="icon"
            id={value}
            value={value}
            defaultChecked={value === defaultIcon}
            className="appearance-none peer"
          />
          <FontAwesomeIcon
            icon={icon}
            size="xl"
            fixedWidth
            className="rounded-md cursor-pointer bg-zinc-600 p-2 outline outline-offset-2 outline-transparent transition-colors peer-checked:outline-zinc-500 peer-focus-visible:outline-zinc-400 hover:bg-zinc-500"
          />
        </label>
      ))}
    </div>
  );
}

export default GroupIcons;
