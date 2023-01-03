import Layout from "components/layout/TodosLayout";
import { PropsWithChildren } from "react";

function GroupsLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}

export default GroupsLayout;
