"use client";

import { routes } from "consts/routes";
import { usePathname } from "next/navigation";

function TodosFooter() {
  const pathname = usePathname();
  return (
    <footer className="flex items-center px-1 py-3 justify-between text-white">
      <button className="uppercase text-sm hover:bg-zinc-600 transition-colors px-4 py-2 rounded-md">
        + New task
      </button>
      {pathname === routes.todos && (
        <button className="uppercase text-sm hover:bg-zinc-600 transition-colors px-4 py-2 rounded-md">
          + Add list
        </button>
      )}
    </footer>
  );
}

export default TodosFooter;
