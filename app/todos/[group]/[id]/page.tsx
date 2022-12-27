import EditTodo from "components/todos/EditTodo";
import { PageProps, TodoPageParams } from "types/pages";
import { TodoGroupInterface, TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchTodo(group: string, id: string) {
  const { response } = await fetchData<TodoInterface>({
    url: `todos/${group}/${id}`,
    cache: "no-store",
  });
  return response;
}

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "todos/groups",
  });
  return response ?? [];
}

async function EditTodoPage({ params }: PageProps<TodoPageParams>) {
  const todo = await fetchTodo(params.group, params.id);
  const groups = await fetchGroups();

  return todo ? (
    <EditTodo todo={todo} groups={groups} />
  ) : (
    <p>Something went wrong</p>
  );
}

export default EditTodoPage;
