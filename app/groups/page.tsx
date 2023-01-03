import { getGroups } from "api/groups";
import TodoGroups from "components/groups/TodoGroups";

async function TodoGroupsPage() {
  const groups = await getGroups();

  return (
    <main className="text-center text-lg text-white pt-4">
      {groups ? <TodoGroups groups={groups} /> : "Couldn't load groups"}
    </main>
  );
}

export default TodoGroupsPage;
