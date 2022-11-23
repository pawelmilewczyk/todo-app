import { routes } from "consts/routes";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";

interface Props {
  groups: TodoGroupInterface[];
}

function TodoGroups({ groups }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      {groups.map(({ id, group }) => (
        <Link
          key={id}
          className="p-2 bg-zinc-600 text-white text-center uppercase rounded-md"
          href={`${routes.todos}/${group}`}
        >
          {group}
        </Link>
      ))}
    </div>
  );
}

export default TodoGroups;
