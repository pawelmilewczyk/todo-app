"use client";

import IconButton from "components/ui/IconButton";
import { routes } from "consts/routes";
import ChevronIcon from "icons/ChevronIcon";
import { usePathname, useRouter } from "next/navigation";

function BackButton() {
  const { push, back } = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    const todosListRoute = /\/todos\/(.*?)\/list/;
    if (
      pathname?.match(todosListRoute) ||
      pathname === routes.newTask ||
      pathname === routes.newGroup
    ) {
      push(routes.todos);
    } else back();
  };

  return pathname !== routes.todos ? (
    <div className="mt-3 absolute left-4 top-0">
      <IconButton onClick={onClick}>
        <ChevronIcon size="md" />
      </IconButton>
    </div>
  ) : null;
}

export default BackButton;
