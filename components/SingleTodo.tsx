import { routes } from "consts/routes";
import Link from "next/link";
import { TodoInterface } from "types/todos";

function SingleTodo({ id, completed, tag, title }: TodoInterface) {
  return (
    <div
      key={id}
      className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between"
    >
      <div className="flex gap-x-3 items-center p-4">
        <input
          type="checkbox"
          id={id.toString()}
          defaultChecked={completed}
          className="w-5 h-5 rounded-full bg-transparent appearance-none cursor-pointer border border-white outline-none 
              checked:bg-white checked:outline checked:outline-1 checked:outline-white checked:border-transparent"
        />
        <label htmlFor={id.toString()} className="text-white">
          {title}
        </label>
      </div>
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
