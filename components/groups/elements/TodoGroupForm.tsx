import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import { groupIcons } from "consts/groupIcons";
import { groupInputs } from "consts/groups";
import { NewGroupInterface } from "types/todos";
import { handleSubmit } from "utils/formSubmit";
import GroupColorPicker from "./GroupColorPicker";

export interface TodoGroupFormProps {
  title: string;
  values: NewGroupInterface;
  onSubmit: (values: NewGroupInterface) => void;
}

function TodoGroupForm({ values, onSubmit, title }: TodoGroupFormProps) {
  return (
    <div>
      <h1 className="font-medium text-md text-center uppercase">{title}</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(groupInputs, onSubmit)}
      >
        <div className="p-6 grid gap-4 max-w-lg w-full mx-auto mb-2">
          <Input
            label="Name"
            name="name"
            defaultValue={values.name}
            placeholder="Name your group"
            required
          />
          <GroupColorPicker defaultColor={values.color} />
          <div className="grid grid-cols-6 gap-y-3">
            {groupIcons.map((icon, index) => (
              <label
                key={`icon-${index}`}
                htmlFor={`icon-${index}`}
                className="justify-self-center"
              >
                <input
                  type="radio"
                  name="icon"
                  id={`icon-${index}`}
                  className="appearance-none peer"
                />
                <FontAwesomeIcon
                  icon={icon}
                  size="xl"
                  fixedWidth
                  className="rounded-md cursor-pointer bg-zinc-600 hover:bg-zinc-500 p-2 outline outline-offset-2 outline-transparent peer-checked:outline-zinc-500 peer-focus-visible:bg-zinc-400 "
                />
              </label>
            ))}
          </div>
        </div>
        <Button label="Save" type="submit" />
      </form>
    </div>
  );
}

export default TodoGroupForm;
