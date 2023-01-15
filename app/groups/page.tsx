import TodoGroups from "components/groups/TodoGroups";
import { getGroups } from "api/groups";

async function TodoGroupsPage() {
  const groups = await getGroups();

  return (
    <main className="h-full text-center text-lg text-white pt-4">
      {groups ? <TodoGroups groups={groups} /> : "Couldn't load groups"}
    </main>
  );
}

export default TodoGroupsPage;
