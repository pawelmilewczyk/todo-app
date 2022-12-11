import { initGroups } from "consts/groups";
import { routes } from "consts/routes";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";

interface Props {
  groups: TodoGroupInterface[];
}

function TodoGroups({ groups }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {[...initGroups, ...groups].map(({ id, name }) => (
        <Link
          key={id}
          className="py-10 bg-zinc-600 text-white text-center uppercase rounded-md transition-colors hover:bg-zinc-500 outline-none focus-visible:bg-zinc-500 focus-visible:outline-zinc-400"
          href={`${routes.todos}/${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

export default TodoGroups;
