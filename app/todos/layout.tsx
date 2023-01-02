import TodosLayout from "components/layout/TodosLayout";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return <TodosLayout>{children}</TodosLayout>;
}

export default Layout;
