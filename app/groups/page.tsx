import TodoGroups from "components/groups/TodoGroups";
import { routes } from "consts/routes";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: routes.groups,
    cache: "no-cache",
  });
  return response;
}

async function TodoGroupsPage() {
  const groups = await fetchGroups();

  return (
    <main className="text-center text-lg text-white pt-4">
      {groups ? <TodoGroups groups={groups} /> : "Couldn't load groups"}
    </main>
  );
}

export default TodoGroupsPage;
