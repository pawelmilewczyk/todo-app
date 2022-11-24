import Checkbox from "components/ui/Checkbox";
import { routes } from "consts/routes";
import Link from "next/link";
import { ChangeEventHandler } from "react";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

function SingleTodo({ id, completed, group, title }: TodoInterface) {
  const onChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    await fetchData({
      url: `/todos/${group}/${id}`,
      method: "PUT",
      body: { completed: e.target.checked },
    });
  };

  return (
    <div className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between">
      <Checkbox label={title} defaultChecked={completed} onChange={onChange} />
      <div className="text-white text-sm">
        <Link href={`${routes.todos}/${group}/${id}`} className="p-4">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default SingleTodo;
