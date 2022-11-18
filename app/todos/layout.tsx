import Footer from "components/Footer";
import { PropsWithChildren } from "react";

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-auto px-4 py-2"> {children}</div>
      <Footer />
    </div>
  );
}
