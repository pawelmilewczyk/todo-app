"use client";

import { createTodo } from "api/todos";
import { getTodosRoute } from "consts/routes";
import { defaultTodo } from "consts/todos";
import { useRouter } from "next/navigation";
import { NewTodoInterface, TodoGroupInterface } from "types/todos";
import TodoForm from "./elements/TodoForm";

interface Props {
  groups: TodoGroupInterface[];
  currentGroup: TodoGroupInterface | undefined;
}

function CreateTodo({ groups, currentGroup }: Props) {
  const { push } = useRouter();

  const onSubmit = async (body: NewTodoInterface) => {
    const { ok, response } = await createTodo(body);
    if (ok && response) {
      const group = response.group.name;
      push(getTodosRoute({ group }));
    }
  };

  return (
    <TodoForm
      groups={groups}
      values={{ ...defaultTodo, group: currentGroup ?? defaultTodo.group }}
      title="New todo"
      onSubmit={onSubmit}
    />
  );
}

export default CreateTodo;
