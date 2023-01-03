"use client";

import { updateTodo } from "api/todos";
import { getTodosRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import {
  NewTodoInterface,
  TodoGroupInterface,
  TodoInterface,
} from "types/todos";
import TodoForm from "./elements/TodoForm";

interface EditTodoProps {
  groups: TodoGroupInterface[];
  todo: TodoInterface;
}

function EditTodo({ todo, groups }: EditTodoProps) {
  const { push } = useRouter();

  const onSubmit = async (body: NewTodoInterface) => {
    const { ok, response } = await updateTodo(todo.id, body);
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
