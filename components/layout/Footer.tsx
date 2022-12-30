"use client";

import { routes } from "consts/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNewTaskRoute } from "./layout.utils";

function Footer() {
  const pathname = usePathname();

  const newTaskRoute = getNewTaskRoute(pathname);

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

export default Footer;
