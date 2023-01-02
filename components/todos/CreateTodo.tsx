"use client";

import { getTodosRoute, routes } from "consts/routes";
import { useRouter } from "next/navigation";
import {
  NewTodoInterface,
  TodoGroupInterface,
  TodoInterface,
} from "types/todos";
import fetchData from "utils/fetchData";
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

  const onSubmit = async (props: NewTodoInterface) => {
    const { ok, response } = await fetchData<TodoInterface>({
      url: routes.todos,
      method: "POST",
      body: { ...props, completed: false },
    });
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
