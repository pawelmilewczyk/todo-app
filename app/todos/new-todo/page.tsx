import CreateTodo from "components/todos/CreateTodo";
import { routes } from "consts/routes";
import { PageProps } from "types/pages";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

interface SearchParams {
  group?: string;
}

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: routes.groups,
    cache: "no-cache",
  });
  return response ?? [];
}

async function NewTaskPage({ searchParams }: PageProps<{}, SearchParams>) {
  const groups = await fetchGroups();

  const group = groups.find(({ name }) => name === searchParams.group);

  return (
    <div className="text-white py-4">
      <CreateTodo groups={groups} currentGroup={group} />
    </div>
  );
}

export default NewTaskPage;
