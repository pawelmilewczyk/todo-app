import EditTodo from "components/EditTodo";
import { routes } from "consts/routes";
import { TODO_LIST_DATA } from "mock/todos";
import Link from "next/link";

export interface TodoProps {
  params: {
    tag: string;
    id: string;
  };
}

async function fetchTodo(id: string) {
  return TODO_LIST_DATA.find((todo) => String(todo.id) === id);
}

async function page({ params }: TodoProps) {
  const todo = await fetchTodo(params.id);

  return (
    <div className="flex flex-col h-full w-screen absolute bg-zinc-700 top-0 left-0">
      <header className="relative flex justify-between items-center text-white">
        <Link href={`${routes.todos}/${params.tag}`} className="px-4 py-2">
          Cancel
        </Link>
        <Link href={`${routes.todos}/${params.tag}`} className="px-4 py-2">
          Done
        </Link>
      </header>
      <main className="text-zinc-100 p-2">
        {todo ? (
          <EditTodo {...todo} />
        ) : (
          <p className="text-center text-lg">
            Todo with provided id does not exist
          </p>
        )}
      </main>
    </div>
  );
}

export default page;
