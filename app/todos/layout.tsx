import Footer from "components/layout/Footer";
import { PropsWithChildren } from "react";

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="max-w-5xl mx-auto h-full w-full overflow-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}
