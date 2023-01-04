import Button from "components/ui/Button";
import Input from "components/ui/Input";
import { groupInputs } from "consts/groups";
import { NewGroupInterface } from "types/todos";
import { handleSubmit } from "utils/formSubmit";
import GroupColorPicker from "./GroupColorPicker";
import GroupIcons from "./GroupIcons";

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
        <div className="p-6 grid gap-8 max-w-lg w-full mx-auto mb-2">
          <Input
            label="Name"
            name="name"
            defaultValue={values.name}
            placeholder="Name your group"
            required
          />
          <GroupColorPicker color={values.color} />
          <GroupIcons icon={values.icon} />
        </div>
        <Button label="Save" type="submit" />
      </form>
    </div>
  );
}

export default TodoGroupForm;
