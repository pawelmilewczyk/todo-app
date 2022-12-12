import TodosFilters from "components/filters/TodoFilters";
import SingleTodo from "components/todos/SingleTodo";
import { defaultFilters } from "consts/filters";
import { Filters, StatusFilters, TimeFilters } from "types/filters";
import { PageProps } from "types/pages";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

interface Params {
  group: string;
}

interface SearchParams {
  time?: TimeFilters;
  status?: StatusFilters;
}

async function fetchTodos(group: string, { time, status }: Filters) {
  const { response } = await fetchData<TodoInterface[]>({
    url: `/todos/${group}?time=${time}&status=${status}`,
  });
  return response;
}

async function TodosListPage({
  params,
  searchParams,
}: PageProps<Params, SearchParams>) {
  const filters: Filters = {
    time: searchParams?.time ?? defaultFilters.time,
    status: searchParams?.status ?? defaultFilters.status,
  };

  const todos = await fetchTodos(params.group, filters);

  return (
    <main className="text-white px-4 flex flex-col h-full overflow-auto gap-y-4">
      <h1 className="font-medium text-md text-center uppercase">
        {params.group}
      </h1>
      <TodosFilters {...filters} />
      <div className="h-full flex flex-col gap-y-4 overflow-auto px-4 my-2">
        {todos
          ? todos.map((props) => <SingleTodo {...props} key={props.id} />)
          : "Something went wrong"}
      </div>
    </main>
  );
}

export default TodosListPage;
