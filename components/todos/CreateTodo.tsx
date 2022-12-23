"use client";

import { getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewTodoInterface, TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";
import TodoForm from "./elements/TodoForm";

const defaultValues: NewTodoInterface = {
  title: "",
  group: "",
};

interface Props {
  groups: TodoGroupInterface[];
}

function CreateTodo({ groups }: Props) {
  const { push } = useRouter();

  const onSubmit = async ({ title, group, date, time }: NewTodoInterface) => {
    const { ok } = await fetchData({
      url: `/todos`,
      method: "POST",
      body: { title, group, date, time, completed: false },
    });
    if (ok) push(getTodosListRoute(group));
  };

  return (
    <TodoForm
      groups={groups}
      values={defaultValues}
      title="New todo"
      onSubmit={onSubmit}
    />
  );
}

export default CreateTodo;