import BackButton from "components/layout/BackButton";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative text-white py-4 h-full flex flex-col">
      <BackButton />
      {children}
    </div>
  );
}

export default Layout;
