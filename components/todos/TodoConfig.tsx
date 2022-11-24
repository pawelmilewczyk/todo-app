"use client";

import { TodosProvider } from "contexts/todos/todosContext";
import { PropsWithChildren } from "react";

function TodoConfig({ children }: PropsWithChildren) {
  return <TodosProvider>{children}</TodosProvider>;
}

export default TodoConfig;
