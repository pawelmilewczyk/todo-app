import { PropsWithChildren } from "react";
import TodosFooter from "./TodosFooter";

function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="h-full flex flex-col justify-between">
        <div className="max-w-5xl mx-auto h-full w-full overflow-auto">
          <div className="text-white py-4 h-full flex flex-col">{children}</div>
        </div>
        <TodosFooter />
      </div>
    </div>
  );
}

export default TodosLayout;
