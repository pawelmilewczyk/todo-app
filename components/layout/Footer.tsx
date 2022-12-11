"use client";

import { routes } from "consts/routes";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  return pathname !== routes.home ? (
    <footer className="flex items-center justify-between text-white bg-zinc-600 border-t border-zinc-500">
      <button className="h-full uppercase text-sm hover:bg-zinc-500 transition-colors px-4 py-3 focus-visible:bg-zinc-500 outline-none">
        + New task
      </button>
      {pathname === routes.todos && (
        <button className="h-full uppercase text-sm hover:bg-zinc-500 transition-colors px-4 py-3 focus-visible:bg-zinc-500 outline-none">
          + Add list
        </button>
      )}
    </footer>
  ) : null;
}

export default Footer;
