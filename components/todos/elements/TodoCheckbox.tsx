import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";
import fetchData from "utils/fetchData";
import { TodoElementProps } from "./elements.types";

function TodoCheckbox({
  todo: { completed, group, id },
  className,
}: TodoElementProps) {
  const { refresh } = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement> = async ({
    target: { checked },
  }) => {
    const { ok } = await fetchData({
      url: `todos/${group}/${id}`,
      method: "PUT",
      body: { completed: checked },
    });
    if (ok) refresh();
  };

  return (
    <input
      readOnly
      type="checkbox"
      checked={completed}
      onChange={onChange}
      // TODO: Before:: and After:: colors should be set depending on user preferences
      className={`${className} group relative w-full h-full flex-shrink-0 bg-transparent appearance-none cursor-pointer p-5 outline-none transition hover:bg-zinc-500 focus-visible:bg-zinc-500
      before:w-5 before:h-5 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
      before:border before:border-white before:rounded-full
      after:w-3 after:h-3 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full checked:after:bg-white`}
    />
  );
}

export default TodoCheckbox;
