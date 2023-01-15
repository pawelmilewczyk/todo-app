"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultFilters } from "consts/filters";
import { groupIcons, staticGroups } from "consts/groups";
import { getTodosRoute } from "consts/routes";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";
import { filtersToSearchParams } from "utils/searchParams";
import TodoGroupActions from "./elements/TodoGroupActions";

interface Props {
  groups: TodoGroupInterface[];
}

function TodoGroups({ groups }: Props) {
  const getHref = (groupName: string) => {
    const searchParams = filtersToSearchParams({
      group: groupName,
      ...defaultFilters,
    });
    return getTodosRoute(searchParams);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {[...staticGroups, ...groups].map(({ id, name, icon }) => (
        <div
          key={id}
          className="relative flex flex-col overflow-hidden text-zinc-400"
        >
          <TodoGroupActions name={name} />
          <Link
            className="p-2 pb-20 bg-zinc-600 transition-colors outline-red-400
              focus-visible:outline-zinc-400 hover:bg-zinc-500 rounded-md"
            href={getHref(name)}
          >
            <p className="text-left text-sm text-zinc-300 px-1 uppercase">
              {name}
            </p>
            <FontAwesomeIcon
              icon={groupIcons[icon]}
              size="xl"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TodoGroups;
