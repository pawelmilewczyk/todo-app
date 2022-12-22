"use client";

import { getEditTodoRoute, getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { TodoPageParams } from "types/pages";
import {
  NewTodoInterface,
  TodoGroupInterface,
  TodoInterface,
} from "types/todos";
import fetchData from "utils/fetchData";
import TodoForm from "./elements/TodoForm";

interface EditTodoProps {
  params: TodoPageParams;
  groups: TodoGroupInterface[];
  todo: TodoInterface | undefined;
}

function EditTodo({ params, todo, groups }: EditTodoProps) {
  const { push } = useRouter();

  const onSubmit = async ({ title, group }: NewTodoInterface) => {
    const { ok } = await fetchData({
      url: getEditTodoRoute(params.group, params.id),
      method: "PUT",
      body: { title, group },
    });
    if (ok) push(getTodosListRoute(group));
  };

  return (
    <TodoForm
      groups={groups}
      values={todo}
      title="Edit todo"
      onSubmit={onSubmit}
    />
  );
}

export default EditTodo;
