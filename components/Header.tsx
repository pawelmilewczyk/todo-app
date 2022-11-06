import Link from "next/link";

const routes = {
  home: "/",
  todos: "/todos",
};

function Header() {
  return (
    <header className="p-5 bg-blue-500 flex gap-x-4 justify-center">
      {Object.entries(routes).map(([key, href]) => (
        <Link
          key={key}
          href={href}
          className="px-2 py-1 bg-white text-blue-500 rounded-lg uppercase text-sm"
        >
          {key}
        </Link>
      ))}
    </header>
  );
}

export default Header;
