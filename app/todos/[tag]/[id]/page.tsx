import { routes } from "consts/routes";
import { TODO_LIST_DATA } from "mock/todos";
import Link from "next/link";

export interface TodoProps {
  params: {
    tag: string;
    id: string;
  };
}

function page({ params }: TodoProps) {
  const todo = TODO_LIST_DATA.find(({ id }) => String(id) === params.id);
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
          <>
            <h1>title: {todo.title}</h1>
            <h2>tag: {todo.tag}</h2>
            <p>completed: {String(todo.completed)}</p>
          </>
        ) : (
          <p className="text-center text-lg">No todo with provided id</p>
        )}
      </main>
    </div>
  );
}

export default page;
