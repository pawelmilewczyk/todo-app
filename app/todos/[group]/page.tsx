import TodosList from "components/todos/TodosList";
import { routes } from "consts/routes";
import { TODO_LIST_DATA, TODO_GROUPS } from "mock/todos";
import Link from "next/link";

export interface TodoProps {
  params: {
    group: string;
  };
}

export async function generateStaticParams() {
  return TODO_GROUPS.map(({ group }) => ({ group }));
}

async function fetchTodos(group: string) {
  return TODO_LIST_DATA.filter((todo) => todo.group === group);
}

async function TodoList({ params }: TodoProps) {
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
      <TodosList todos={todos} />
    </>
  );
}

export default TodoList;
