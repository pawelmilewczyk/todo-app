"use client";

import Select from "components/ui/Select";
import TextField from "components/ui/TextField";
import { getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { TodoPageParams } from "types/pages";
import { TodoGroupInterface, TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

interface EditTodoProps {
  params: TodoPageParams;
  groups: TodoGroupInterface[];
  todo: TodoInterface | undefined;
}

function EditTodo({ params, todo, groups }: EditTodoProps) {
  const { push } = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const names = ["title", "group"];
    const [title, group] = names.map((name) => formData.get(name)?.toString());
    if (title && group) {
      const { ok } = await fetchData({
        url: `/todos/${params.group}/${params.id}`,
        method: "PUT",
        body: { title, group },
      });
      if (ok) push(getTodosListRoute(group ?? params.group));
    }
  };

  return (
    <div>
      <h1 className="font-medium text-md text-center uppercase">Edit todo</h1>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <div className="text-zinc-100 p-2">
          {todo ? (
            <div className="p-4 flex flex-col gap-y-4">
              <TextField label="Title" defaultValue={todo.title} required />
              <Select
                options={groups}
                label="Group"
                defaultValue={todo.group}
                required
              />
              <button type="submit">Save</button>
            </div>
          ) : (
            <p className="text-center text-lg">
              Todo with provided id does not exist
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
