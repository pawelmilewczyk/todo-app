import TodosFilters from "components/filters/TodoFilters";
import TodosList from "components/todos/TodosList";
import { getTodosRoute, routes } from "consts/routes";
import { SearchParams } from "types/filters";
import { PageProps } from "types/pages";
import { TodoGroupInterface, TodosFetchInterface } from "types/todos";
import fetchData from "utils/fetchData";
import { searchParamsToFilters } from "utils/searchParams";

async function fetchTodoData(searchParams: SearchParams) {
  const { response } = await fetchData<TodosFetchInterface>({
    url: getTodosRoute(searchParams),
    cache: "no-cache",
  });
  return response;
}

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: routes.groups,
    cache: "no-cache",
  });
  return response;
}

async function TodosListPage({ searchParams }: PageProps<{}, SearchParams>) {
  const data = await fetchTodoData(searchParams);
  const groups = await fetchGroups();
  const filters = searchParamsToFilters(searchParams);

  return (
    <main className="text-white flex flex-col h-full overflow-auto gap-y-4 ">
      {groups && <TodosFilters filters={filters} groups={groups} />}
      {data ? (
        <TodosList data={data} filters={filters} />
      ) : (
        "Could not load todos"
      )}
    </main>
  );
}

export default TodosListPage;
