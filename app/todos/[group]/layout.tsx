import BackButton from "components/layout/BackButton";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: {
    group: string;
  };
}

function Layout({ children, params }: LayoutProps) {
  return (
    <div className="relative text-white py-4 h-full flex flex-col">
      <BackButton />
      {children}
    </div>
  );
}

export default Layout;
