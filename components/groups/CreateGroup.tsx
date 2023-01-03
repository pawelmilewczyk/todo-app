"use client";

import { createGroup } from "api/groups";
import { defaultGroup } from "consts/groups";
import { routes } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewGroupInterface } from "types/todos";
import TodoGroupForm from "./elements/TodoGroupForm";

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
      values={defaultGroup}
      onSubmit={onSubmit}
    />
  );
}

export default CreateGroup;
