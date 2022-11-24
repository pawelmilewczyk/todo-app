"use client";

import Select from "components/ui/Select";
import TextField from "components/ui/TextField";
import { routes } from "consts/routes";
import Link from "next/link";
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
  const href = `${routes.todos}/${params.group}`;
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
      if (ok) push(href);
    }
  };

  return (
    <form
      className="flex flex-col h-full w-screen absolute bg-zinc-700 top-0 left-0"
      onSubmit={onSubmit}
    >
      <header className="relative flex justify-between items-center text-white">
        <Link className="px-4 py-2" href={href}>
          Cancel
        </Link>
        <button className="px-4 py-2" type="submit">
          Done
        </button>
      </header>
      <main className="text-zinc-100 p-2">
        {todo ? (
          <div className="p-4 flex flex-col gap-y-4">
            <TextField label="Title" defaultValue={todo.title} required />
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
      </main>
    </form>
  );
}

export default EditTodo;
