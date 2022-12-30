"use client";

import { getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewTodoInterface, TodoGroupInterface } from "types/todos";
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
    const { ok } = await fetchData({
      url: `todos`,
      method: "POST",
      body: { ...props, completed: false },
    });
    if (ok) push(getTodosListRoute(props.group.name));
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
