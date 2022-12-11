import TodoConfig from "components/todos/TodoConfig";
import { PropsWithChildren } from "react";

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col justify-between">
      <TodoConfig>
        <div className="h-full overflow-auto"> {children}</div>
      </TodoConfig>
    </div>
  );
}
