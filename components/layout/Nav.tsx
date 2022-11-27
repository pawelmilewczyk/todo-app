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
    <nav className="p-4 flex gap-x-4 items-center justify-center min-h-[4rem]">
      {Object.entries(routes).map(([name, href]) => (
        <Link
          key={name}
          href={href}
          className={`px-2 py-1 rounded-lg uppercase text-md transition focus:outline-zinc-600 ${
            pathname === href || isNestedPathActive(href)
              ? "bg-white text-zinc-700 shadow-md"
              : "text-white hover:bg-zinc-600 hover:shadow-md active:scale-95"
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
