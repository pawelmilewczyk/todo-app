"use client";

import { getSingleGroupRoute, routes } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewGroupInterface, TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";
import TodoGroupForm from "./elements/TodoGroupForm";

interface EditGroupProps {
  group: TodoGroupInterface;
}

function EditGroup({ group }: EditGroupProps) {
  const { push } = useRouter();

  const onSubmit = async (body: NewGroupInterface) => {
    const { ok } = await fetchData({
      url: getSingleGroupRoute(group.name),
      method: "PUT",
      body,
    });

    if (ok) push(routes.groups);
  };

  return (
    <TodoGroupForm title="Edit group" values={group} onSubmit={onSubmit} />
  );
}

export default EditGroup;
