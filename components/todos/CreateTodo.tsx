"use client";

import { createTodo } from "api/todos";
import { getTodosRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewTodoInterface, TodoGroupInterface } from "types/todos";
import TodoForm from "./elements/TodoForm";

const defaultValues: NewTodoInterface = {
  name: "",
  group: { name: "", id: "" },
};

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
      values={{ ...defaultValues, group: currentGroup ?? defaultValues.group }}
      title="New todo"
      onSubmit={onSubmit}
    />
  );
}

export default CreateTodo;
