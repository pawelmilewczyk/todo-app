import Form from "components/ui/Form";
import Input from "components/ui/Input";
import { groupInputs } from "consts/groups";
import { NewGroupInterface } from "types/todos";
import { handleSubmit } from "utils/formSubmit";
import GroupIcons from "./GroupIcons";

export interface TodoGroupFormProps {
  title: string;
  values: NewGroupInterface;
  onSubmit: (values: NewGroupInterface) => void;
}

function TodoGroupForm({ values, onSubmit, title }: TodoGroupFormProps) {
  return (
    <Form onSubmit={handleSubmit(groupInputs, onSubmit)} title={title}>
      <div className="p-6 grid gap-8 max-w-lg w-full mx-auto mb-2">
        <Input
          label="Name"
          name="name"
          defaultValue={values.name}
          placeholder="Name your group"
          required
        />
        <GroupIcons icon={values.icon} />
      </div>
    </Form>
  );
}

export default TodoGroupForm;
