import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return <div className="text-white py-4 h-full flex flex-col">{children}</div>;
}

export default Layout;
