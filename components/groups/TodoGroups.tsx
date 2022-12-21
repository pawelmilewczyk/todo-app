import { defaultFilters } from "consts/filters";
import { staticGroups } from "consts/groups";
import { getGroupRoute, getTodosListRoute } from "consts/routes";
import { DeleteIcon } from "icons/DeleteIcon";
import { EditIcon } from "icons/EditIcon";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";
import { filtersToSearchParams } from "utils/searchParams";

interface Props {
  groups: TodoGroupInterface[];
}

function TodoGroups({ groups }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {[...staticGroups, ...groups].map(({ id, name }) => (
        <div
          key={id}
          className="relative flex flex-col overflow-hidden rounded-md text-zinc-400"
        >
          <div className="absolute top-0 right-0 overflow-hidden flex">
            <Link
              className="p-1 hover:text-zinc-100 overflow-hidden"
              href={getGroupRoute(name)}
            >
              <EditIcon size="1rem" />
            </Link>
            <button className="p-1 hover:text-zinc-100">
              <DeleteIcon size="1rem" />
            </button>
          </div>
          <Link
            className="py-10 bg-zinc-600 text-white text-center uppercase transition-colors hover:bg-zinc-500 outline-none focus-visible:bg-zinc-500 focus-visible:outline-zinc-400"
            href={getTodosListRoute(
              name,
              filtersToSearchParams(defaultFilters)
            )}
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TodoGroups;
