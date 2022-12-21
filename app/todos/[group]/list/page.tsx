import TodosFilters from "components/filters/TodoFilters";
import TodosList from "components/todos/TodosList";
import { getTodosListRoute } from "consts/routes";
import { SearchParams } from "types/filters";
import { PageProps } from "types/pages";
import { TodosFetchInterface } from "types/todos";
import fetchData from "utils/fetchData";
import { searchParamsToFilters } from "utils/searchParams";

interface Params {
  group: string;
}

async function fetchTodoData(group: string, filters: SearchParams) {
  const { response } = await fetchData<TodosFetchInterface>({
    url: getTodosListRoute(group, filters),
    cache: "no-cache",
  });
  return response;
}

async function TodosListPage({
  params,
  searchParams,
}: PageProps<Params, SearchParams>) {
  const data = await fetchTodoData(params.group, searchParams);
  const filters = searchParamsToFilters(searchParams);

  return (
    <main className="text-white flex flex-col h-full overflow-auto gap-y-4 ">
      <h1 className="font-medium text-md text-center uppercase">
        {params.group}
      </h1>
      <TodosFilters {...filters} />
      {data ? (
        <TodosList data={data} filters={filters} />
      ) : (
        "Could not load todos"
      )}
    </main>
  );
}

export default TodosListPage;
