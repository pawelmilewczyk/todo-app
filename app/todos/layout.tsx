import Layout from "components/layout/TodosLayout";
import { PropsWithChildren } from "react";

function TodosLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}

export default TodosLayout;
