import BackButton from "components/layout/BackButton";
import Footer from "components/layout/Footer";
import { PropsWithChildren } from "react";

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="relative max-w-5xl mx-auto h-full w-full overflow-auto">
        <BackButton />
        {children}
      </div>
      <Footer />
    </div>
  );
}
