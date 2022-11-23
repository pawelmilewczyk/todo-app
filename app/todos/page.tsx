import TodoGroups from "components/todos/TodoGroups";
import { TODO_GROUPS } from "mock/todos";

async function fetchGroups() {
  return TODO_GROUPS;
}

async function Todos() {
  const groups = await fetchGroups();

  return (
    <main className="text-center text-lg text-white">
      <TodoGroups groups={groups} />
    </main>
  );
}

export default Todos;
