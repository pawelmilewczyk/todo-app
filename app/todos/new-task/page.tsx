import CreateTodo from "components/todos/CreateTodo";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response ?? [];
}

async function NewTaskPage() {
  const groups = await fetchGroups();

  return (
    <div className="text-white py-4">
      <CreateTodo groups={groups} />
    </div>
  );
}

export default NewTaskPage;
