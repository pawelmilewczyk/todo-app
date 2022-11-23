import Select from "components/ui/Select";
import TextField from "components/ui/TextField";
import { TODO_GROUPS } from "mock/todos";
import { TodoInterface } from "types/todos";

function EditTodo({ title, group }: TodoInterface) {
  const groupOptions = TODO_GROUPS.map(({ id, group }) => ({
    id,
    name: group,
  }));

  return (
    <form className="p-4 flex flex-col gap-y-4">
      <TextField label="Title" defaultValue={title} />
      <Select options={groupOptions} label="Group" defaultValue={group} />
    </form>
  );
}

export default EditTodo;
