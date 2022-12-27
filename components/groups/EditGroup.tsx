"use client";

import { getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewGroupInterface, TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";
import TodoGroupForm from "./elements/TodoGroupForm";

interface EditGroupProps {
  group: TodoGroupInterface;
}

function EditGroup({ group }: EditGroupProps) {
  const { push } = useRouter();

  const onSubmit = async (props: NewGroupInterface) => {
    const { ok } = await fetchData({
      url: `todos/${group.name}`,
      method: "PUT",
      body: { ...props },
    });
    if (ok) push(getTodosListRoute(props.name));
  };

  return (
    <TodoGroupForm title="Edit group" values={group} onSubmit={onSubmit} />
  );
}

export default EditGroup;
