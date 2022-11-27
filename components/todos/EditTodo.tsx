"use client";

import Select from "components/ui/Select";
import TextField from "components/ui/TextField";
import { routes } from "consts/routes";
import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useContext } from "react";
import { TodoPageParams } from "types/pages";
import { TodoGroupInterface, TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

interface EditTodoProps {
  params: TodoPageParams;
  groups: TodoGroupInterface[];
  todo: TodoInterface | undefined;
}

function EditTodo({ params, todo, groups }: EditTodoProps) {
  const { dispatch } = useContext(TodosContext);

  const { push } = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const names = ["title", "description", "group"];
    const [title, group, description] = names.map((name) =>
      formData.get(name)?.toString()
    );
    if (title && group) {
      const { ok } = await fetchData({
        url: `/todos/${params.group}/${params.id}`,
        method: "PUT",
        body: { title, group, description },
      });
      if (ok) {
        dispatch({
          type: TodoAction.UpdateTodo,
          payload: { id: params.id, data: { title, group, description } },
        });
        push(`${routes.todos}/${group ?? params.group}`);
      }
    }
  };

  return (
    <form
      className="flex flex-col h-full w-full max-w-5xl absolute bg-zinc-700 top-0 left-1/2 -translate-x-1/2"
      onSubmit={onSubmit}
    >
      <div className="relative flex justify-between items-center text-white">
        <Link className="px-4 py-2" href={`${routes.todos}/${params.group}`}>
          Cancel
        </Link>
        <button className="px-4 py-2" type="submit">
          Done
        </button>
      </div>
      <div className="text-zinc-100 p-2">
        {todo ? (
          <div className="p-4 flex flex-col gap-y-4">
            <TextField label="Title" defaultValue={todo.title} required />
            <TextField label="Description" defaultValue={todo.description} />
            <Select
              options={groups}
              label="Group"
              defaultValue={todo.group}
              required
            />
          </div>
        ) : (
          <p className="text-center text-lg">
            Todo with provided id does not exist
          </p>
        )}
      </div>
    </form>
  );
}

export default EditTodo;
