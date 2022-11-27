import TodosFilters from "components/filters/TodoFilters";
import TodosList from "components/todos/TodosList";
import { routes } from "consts/routes";
import Link from "next/link";
import { PageProps, TodosPageParams } from "types/pages";
import { TodoGroupInterface, TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchTodos(group: string) {
  const { response } = await fetchData<TodoInterface[]>({
    url: `/todos/${group}`,
  });
  return response;
}

async function TodosPage({ params }: PageProps<TodosPageParams>) {
  const todos = await fetchTodos(params.group);

  return (
    <div className="flex flex-col h-full">
      <header className="flex flex-col gap-y-4 relative text-white top-0 mt-2">
        <Link
          href={routes.todos}
          className="absolute left-4 top-0 -translate-y-1 text-2xl cursor-pointer p-2 leading-none rounded-full 
        hover:bg-zinc-600 active:scale-95 transition focus:outline-zinc-600"
        >
          &#x2190;
        </Link>
        <h1 className="font-medium text-lg text-center uppercase">
          {params.group}
        </h1>
        <TodosFilters />
      </header>
      {todos ? <TodosList todos={todos} /> : "Couldn't load data"}
    </div>
  );
}

export default TodosPage;

export async function generateStaticParams() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response
    ? response?.map(({ name }: TodoGroupInterface) => ({ group: name }))
    : [];
}
