import { initGroups } from "consts/groups";
import { routes } from "consts/routes";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";

interface Props {
  groups: TodoGroupInterface[];
}

function TodoGroups({ groups }: Props) {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      {[...initGroups, ...groups].map(({ id, name }) => (
        <Link
          key={id}
          className="p-2 bg-zinc-600 text-white text-center uppercase rounded-md transition-colors hover:bg-zinc-500"
          href={`${routes.todos}/${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

export default TodoGroups;
