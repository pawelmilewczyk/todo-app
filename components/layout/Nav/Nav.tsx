"use client";

import { protectedRoutes, routes } from "consts/routes";
import { signOut } from "next-auth/react";
import { PropsWithSession } from "types/propsWithSession";
import NavButton from "./NavButton";

export const Nav = ({ session }: PropsWithSession) => {
  const navButtons = Object.entries(protectedRoutes).map(([name, href]) => ({
    name,
    href,
    hidden: !session,
  }));

  const handleSignOut = () => {
    signOut({
      redirect: true,
      callbackUrl: routes.login,
    });
  };

  const [username] = session?.user?.name?.split(" ") ?? [];

  return (
    <nav className="relative flex items-center justify-center bg-zinc-600 border-b border-zinc-500">
      {username && (
        <span className="absolute left-0 px-4 italic text-lg">
          Welcome {username}!
        </span>
      )}
      <NavButton name="Home" href={routes.home} />
      {navButtons
        .filter(({ hidden }) => !hidden)
        .map(({ name, href }) => (
          <NavButton key={name} name={name} href={href} />
        ))}
      <div className="absolute right-0">
        {!session ? (
          <NavButton name="Login" href={routes.login} />
        ) : (
          <NavButton name="Logout" onClick={handleSignOut} />
        )}
      </div>
    </nav>
  );
};
