import { useRouter } from "next/navigation";
import { FocusEventHandler } from "react";
import fetchData from "utils/fetchData";
import { TodoElementProps } from "./elements.types";

function TodoLabel({ todo: { title, group, id } }: TodoElementProps) {
  const { refresh } = useRouter();

  const onBlur: FocusEventHandler<HTMLInputElement> = async ({
    target: { value },
  }) => {
    if (title !== value) {
      const { ok } = await fetchData({
        url: `/todos/${group}/${id}`,
        method: "PUT",
        body: { title: value },
      });
      if (ok) refresh();
    }
  };

  return (
    <input
      type="text"
      defaultValue={title}
      onBlur={onBlur}
      // TODO: Colors should be set depending on user preferences
      className="pt-2 text-white bg-transparent outline-none selection:bg-zinc-500 caret-zinc-300"
    />
  );
}

export default TodoLabel;
