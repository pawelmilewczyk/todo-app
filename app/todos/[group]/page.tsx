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
    <>
      <header className="relative text-white">
        <Link
          href={routes.todos}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer p-2 leading-none rounded-full 
        hover:bg-zinc-600 active:scale-95 transition"
        >
          &#x2190;
        </Link>
        <h1 className="font-medium text-lg text-center uppercase">
          {params.group}
        </h1>
      </header>
      {todos ? <TodosList todos={todos} /> : "Couldn't load data"}
    </>
  );
}

export default TodosPage;

export async function generateStaticParams() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response?.map(({ name }: TodoGroupInterface) => ({ group: name }));
}
