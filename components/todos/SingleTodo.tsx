import Checkbox from "components/ui/Checkbox";
import { routes } from "consts/routes";
import Link from "next/link";
import { TodoInterface } from "types/todos";

function SingleTodo({ id, completed, tag, title }: TodoInterface) {
  return (
    <div className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between">
      <Checkbox label={title} defaultChecked={completed} />
      <Link
        href={`${routes.todos}/${tag}/${id}`}
        className="text-white py-2 px-4"
      >
        Edit
      </Link>
    </div>
  );
}

export default SingleTodo;
