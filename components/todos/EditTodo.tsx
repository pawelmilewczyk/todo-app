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
  todo: TodoInterface | undefined;
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

  return todo ? (
    <TodoForm
      groups={groups}
      values={todo}
      title="Edit todo"
      onSubmit={onSubmit}
    />
  ) : (
    <p>Something went wrong</p>
  );
}

export default EditTodo;
