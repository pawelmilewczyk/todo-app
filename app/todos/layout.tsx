import Footer from "components/layout/TodosFooter";
import TodoConfig from "components/todos/TodoConfig";
import { PropsWithChildren } from "react";

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col justify-between">
      <TodoConfig>
        <div className="overflow-auto px-4 py-2"> {children}</div>
      </TodoConfig>
      <Footer />
    </div>
  );
}
