"use client";

import { getEditTodoRoute, getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import {
  NewTodoInterface,
  TodoGroupInterface,
  TodoInterface,
} from "types/todos";
import fetchData from "utils/fetchData";
import TodoForm from "./elements/TodoForm";

interface EditTodoProps {
  groups: TodoGroupInterface[];
  todo: TodoInterface;
}

function EditTodo({ todo, groups }: EditTodoProps) {
  const { push } = useRouter();

  const onSubmit = async (props: NewTodoInterface) => {
    const { ok } = await fetchData({
      url: getEditTodoRoute(todo.group.name, todo.id),
      method: "PUT",
      body: props,
    });
    if (ok) push(getTodosListRoute(props.group.name));
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
