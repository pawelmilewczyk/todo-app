import Select from "components/ui/Select";
import TextField from "components/ui/TextField";
import { TODO_TAGS } from "mock/todos";
import { TodoInterface } from "types/todos";

function EditTodo({ title, tag }: TodoInterface) {
  const groupOptions = TODO_TAGS.map(({ id, tag }) => ({ id, name: tag }));

  return (
    <form className="p-4 flex flex-col gap-y-4">
      <TextField label="Title" defaultValue={title} />
      <Select options={groupOptions} label="Group" defaultValue={tag} />
    </form>
  );
}

export default EditTodo;
