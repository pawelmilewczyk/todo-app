import TodoGroups from "components/todos/TodoGroups";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response;
}

async function TodoGroupsPage() {
  const groups = await fetchGroups();
  return (
    <main className="text-center text-lg text-white">
      {groups ? <TodoGroups groups={groups} /> : "Couldn't load data"}
    </main>
  );
}

export default TodoGroupsPage;
