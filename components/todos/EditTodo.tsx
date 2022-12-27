"use client";

import { getEditTodoRoute, getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
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
  todo: TodoInterface;
}

function EditTodo({ params, todo, groups }: EditTodoProps) {
  const { push } = useRouter();

  const onSubmit = async (props: NewTodoInterface) => {
    const { ok } = await fetchData({
      url: getEditTodoRoute(params.group, params.id),
      method: "PUT",
      body: props,
    });
    if (ok) push(getTodosListRoute(props.group));
  };

  return (
    <TodoForm
      title="Edit todo"
      groups={groups}
      values={todo}
      onSubmit={onSubmit}
    />
  );
}

export default EditTodo;
