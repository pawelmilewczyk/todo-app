import EditTodo from "components/todos/EditTodo";
import { getSingleTodoRoute } from "consts/routes";
import { PageProps } from "types/pages";
import { TodoGroupInterface, TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

interface Params {
  id: string;
}

async function fetchTodo(id: string) {
  const { response } = await fetchData<TodoInterface>({
    url: getSingleTodoRoute(id),
    cache: "no-cache",
  });
  return response;
}

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "groups",
  });
  return response ?? [];
}

async function EditTodoPage({ params }: PageProps<Params>) {
  const todo = await fetchTodo(params.id);
  const groups = await fetchGroups();

  return todo ? (
    <EditTodo todo={todo} groups={groups} />
  ) : (
    <p>Something went wrong</p>
  );
}

export default EditTodoPage;
