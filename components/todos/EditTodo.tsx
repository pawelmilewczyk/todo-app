"use client";

import { getSingleTodoRoute, getTodosRoute } from "consts/routes";
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
    const { ok, response } = await fetchData<TodoInterface>({
      url: getSingleTodoRoute(todo.id),
      method: "PUT",
      body: props,
    });

    if (ok && response) {
      const group = response.group.name;
      push(getTodosRoute({ group }));
    }
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
