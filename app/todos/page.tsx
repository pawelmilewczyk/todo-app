import { getGroups } from "api/groups";
import { getTodos } from "api/todos";
import TodosFilters from "components/filters/TodoFilters";
import TodosList from "components/todos/TodosList";
import { SearchParams } from "types/filters";
import { PageProps } from "types/pages";
import { searchParamsToFilters } from "utils/searchParams";

async function TodosListPage({ searchParams }: PageProps<{}, SearchParams>) {
  const todosData = await getTodos(searchParams ?? {});
  const groups = await getGroups();
  const filters = searchParamsToFilters(searchParams ?? {});

  return (
    <main className="text-white flex flex-col h-full overflow-auto gap-y-4 ">
      {groups ? (
        <TodosFilters filters={filters} groups={groups} />
      ) : (
        "Could not load groups"
      )}

      {todosData ? (
        <TodosList data={todosData} filters={filters} />
      ) : (
        "Could not load todos"
      )}
    </main>
  );
}

export default TodosListPage;
