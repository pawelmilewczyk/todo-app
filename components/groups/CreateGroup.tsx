"use client";

import { getTodosListRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { NewGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";
import TodoGroupForm from "./elements/TodoGroupForm";

const defaultValues: NewGroupInterface = {
  name: "",
};

function CreateGroup() {
  const { push, refresh } = useRouter();

  const onSubmit = async (props: NewGroupInterface) => {
    const { ok } = await fetchData({
      url: `todos/groups`,
      method: "POST",
      body: { ...props },
    });
    if (ok) {
      refresh();
      push(getTodosListRoute(props.name));
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
