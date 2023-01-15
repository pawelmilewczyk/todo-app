"use client";

import { PropsWithChildren, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { PropsWithSession } from "types/propsWithSession";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes, routes } from "consts/routes";
import Spinner from "components/layout/Spinner";

type Props = PropsWithChildren<PropsWithSession>;

function Providers({ children, session }: Props) {
  const { replace } = useRouter();
  const pathname = usePathname();

  const isProtectedRoute = Object.values(protectedRoutes).some(
    (route) => route === pathname
  );

  const shouldRedirect = !session && isProtectedRoute;

  useEffect(() => {
    if (shouldRedirect) {
      replace(routes.login);
    }
  }, []);

  return (
    <SessionProvider session={session}>
      {shouldRedirect ? <Spinner message="Redirecting..." /> : children}
    </SessionProvider>
  );
}

export default Providers;
