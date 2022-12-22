"use client";

import { getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { NewTodoInterface, TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";
import TodoForm from "./elements/TodoForm";

interface Props {
  groups: TodoGroupInterface[];
}

function CreateTodo({ groups }: Props) {
  const { push } = useRouter();

  const onSubmit = async ({ title, group, deadline }: NewTodoInterface) => {
    const { ok } = await fetchData({
      url: `/todos`,
      method: "POST",
      body: { title, group, deadline },
    });
    if (ok) push(getTodosListRoute(group));
  };

  return <TodoForm groups={groups} title="New todo" onSubmit={onSubmit} />;
}

export default CreateTodo;
