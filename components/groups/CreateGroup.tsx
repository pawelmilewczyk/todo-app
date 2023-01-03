"use client";

import { createGroup } from "api/groups";
import { routes } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewGroupInterface } from "types/todos";
import TodoGroupForm from "./elements/TodoGroupForm";

const defaultValues: NewGroupInterface = {
  name: "",
};

function CreateGroup() {
  const { push, refresh } = useRouter();

  const onSubmit = async (body: NewGroupInterface) => {
    const { ok } = await createGroup(body);
    if (ok) {
      refresh();
      push(routes.groups);
    }
  };

  return (
    <TodoGroupForm
      title="New group"
      values={defaultValues}
      onSubmit={onSubmit}
    />
  );
}

export default CreateGroup;
