"use client";

import { navRoutes } from "consts/routes";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function Nav() {
  const { push } = useRouter();
  const pathname = usePathname();

  const onClick = (href: string) => () => push(href);

  return (
    <nav className="flex items-center justify-center bg-zinc-600 border-b border-zinc-500">
      {Object.entries(navRoutes).map(([name, href]) => (
        <button
          key={name}
          onClick={onClick(href)}
          className={`px-4 py-3 uppercase text-md transition focus-visible:bg-zinc-500 outline-none ${
            pathname === href
              ? "text-white"
              : "text-zinc-400 hover:text-zinc-300"
          }`}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}

export default Nav;
