import { getGroups } from "api/groups";
import { getTodo } from "api/todos";
import EditTodo from "components/todos/EditTodo";
import { PageProps } from "types/pages";

interface Params {
  id: string;
}

async function EditTodoPage({ params }: PageProps<Params>) {
  const todo = await getTodo(params.id);
  const groups = await getGroups();

  if (!todo || !groups) return <p>Something went wrong</p>;
  return <EditTodo todo={todo} groups={groups} />;
}

export default EditTodoPage;
