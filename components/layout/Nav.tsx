"use client";

import { routes } from "consts/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  const isNestedPathActive = (href: string) => {
    return href !== routes.home && !!pathname?.startsWith(href);
  };

  return (
    <nav className="flex items-center justify-center bg-zinc-600 border-b border-zinc-500">
      {Object.entries(routes).map(([name, href]) => (
        <Link
          key={name}
          href={href}
          className={`px-4 py-3 uppercase text-md transition focus-visible:bg-zinc-500 outline-none ${
            pathname === href || isNestedPathActive(href)
              ? "text-white"
              : "text-zinc-400 hover:text-zinc-300"
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
