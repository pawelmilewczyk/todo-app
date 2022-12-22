import Select from "components/ui/Select";
import TextField from "components/ui/TextField";
import { FormEventHandler } from "react";
import { NewTodoInterface } from "types/todos";
import { defaultFormValues } from "./elements.const";
import { TodoFormProps } from "./elements.types";

function TodoForm({
  groups,
  values = defaultFormValues,
  onSubmit,
  title,
}: TodoFormProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const values = ["title", "group"].reduce(
      (prev, value) => ({ ...prev, [value]: formData.get(value)?.toString() }),
      {}
    ) as NewTodoInterface;

    onSubmit(values);
  };

  return (
    <div>
      <h1 className="font-medium text-md text-center uppercase">{title}</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="text-zinc-100 p-6 grid gap-4 max-w-lg w-full mx-auto">
          <TextField
            label="Title"
            name="title"
            defaultValue={values.title}
            placeholder="Name your task"
            required
          />
          <Select
            options={groups}
            label="Group"
            name="group"
            defaultValue={values.group}
            placeholder="Select group"
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default TodoForm;
