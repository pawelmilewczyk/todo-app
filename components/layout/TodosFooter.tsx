"use client";

import { staticGroups } from "consts/groups";
import { routes } from "consts/routes";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { getRouteWithSearchParams } from "utils/searchParams";

const getNewTaskRoute = (searchedGroup: string | null) => {
  const group = staticGroups.every(({ name }) => name !== searchedGroup)
    ? searchedGroup ?? ""
    : "";
  return getRouteWithSearchParams(routes.newTodo, { group });
};

function TodosFooter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newTaskRoute = getNewTaskRoute(searchParams.get("group"));

  return (
    <footer className="flex items-center justify-between text-white bg-zinc-600 border-t border-zinc-500">
      {pathname !== newTaskRoute && (
        <Link
          href={newTaskRoute}
          className="h-full uppercase text-sm hover:bg-zinc-500 transition-colors px-4 py-3 focus-visible:bg-zinc-500 outline-none"
        >
          + New task
        </Link>
      )}
      {pathname !== routes.newGroup && (
        <Link
          href={routes.newGroup}
          className="ml-auto h-full uppercase text-sm hover:bg-zinc-500 transition-colors px-4 py-3 focus-visible:bg-zinc-500 outline-none"
        >
          + Add group
        </Link>
      )}
    </footer>
  );
}

export default TodosFooter;
