import TodosFilters from "components/filters/TodoFilters";
import TodosList from "components/todos/TodosList";
import { getTodosListRoute } from "consts/routes";
import { SearchParams } from "types/filters";
import { PageProps } from "types/pages";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";
import { searchParamsToFilters } from "utils/searchParams";

interface Params {
  group: string;
}

async function fetchTodos(group: string, filters: SearchParams) {
  const { response } = await fetchData<TodoInterface[]>({
    url: getTodosListRoute(group, filters),
    cache: "no-store",
  });
  return response;
}

async function TodosListPage({
  params,
  searchParams,
}: PageProps<Params, SearchParams>) {
  const todos = await fetchTodos(params.group, searchParams);

  return (
    <main className="text-white px-4 flex flex-col h-full overflow-auto gap-y-4">
      <h1 className="font-medium text-md text-center uppercase">
        {params.group}
      </h1>
      <TodosFilters {...searchParamsToFilters(searchParams)} />
      {todos ? <TodosList todos={todos} /> : "Could not load todos"}
    </main>
  );
}

export default TodosListPage;
