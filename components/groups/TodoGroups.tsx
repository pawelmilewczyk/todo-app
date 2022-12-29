"use client";

import { defaultFilters } from "consts/filters";
import { staticGroups } from "consts/groups";
import { getTodosListRoute } from "consts/routes";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";
import { filtersToSearchParams } from "utils/searchParams";
import TodoGroupActions from "./elements/TodoGroupActions";

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
          <TodoGroupActions name={name} id={id} />
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
