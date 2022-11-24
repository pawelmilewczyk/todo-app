import EditTodo from "components/todos/EditTodo";
import { PageProps, TodoPageParams } from "types/pages";
import { TodoGroupInterface, TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchTodo(group: string, id: string) {
  const { response } = await fetchData<TodoInterface>({
    url: `/todos/${group}/${id}`,
  });
  return response;
}

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response ?? [];
}

async function TodoPage({ params }: PageProps<TodoPageParams>) {
  const todo = await fetchTodo(params.group, params.id);
  const groups = await fetchGroups();

  return <EditTodo todo={todo} groups={groups} params={params} />;
}

export default TodoPage;
