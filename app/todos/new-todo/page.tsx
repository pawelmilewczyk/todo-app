import { getGroups } from "api/groups";
import CreateTodo from "components/todos/CreateTodo";
import { PageProps } from "types/pages";

interface SearchParams {
  group?: string;
}

async function NewTodoPage({ searchParams }: PageProps<{}, SearchParams>) {
  const groups = await getGroups();
  if (!groups) return <p>Could not load groups</p>;

  const group = groups.find(({ name }) => name === searchParams?.group);

  return (
    <div className="text-white py-4">
      <CreateTodo groups={groups} currentGroup={group} />
    </div>
  );
}

export default NewTodoPage;
