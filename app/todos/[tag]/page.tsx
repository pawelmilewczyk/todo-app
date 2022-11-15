import { routes } from "consts/routes";
import { TODO_LIST_DATA, TODO_TAGS } from "mock/todos";
import Link from "next/link";

export interface TodoProps {
  params: {
    tag: string;
  };
}

function TodoList({ params }: TodoProps) {
  const todos = TODO_LIST_DATA.filter(({ tag }) => tag === params.tag);

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
          {params.tag}
        </h1>
      </header>
      <main className="flex flex-col gap-y-4 mt-4">
        {todos.length ? (
          todos.map(({ id, title, completed, tag }) => (
            <div
              key={id}
              className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between"
            >
              <div className="flex gap-x-3 items-center p-4">
                <input
                  type="checkbox"
                  id={id.toString()}
                  defaultChecked={completed}
                  className="w-5 h-5 rounded-full bg-transparent appearance-none cursor-pointer border border-white outline-none 
              checked:bg-white checked:outline checked:outline-1 checked:outline-white checked:border-transparent"
                />
                <label htmlFor={id.toString()} className="text-white">
                  {title}
                </label>
              </div>
              <Link
                href={`${routes.todos}/${tag}/${id}`}
                className="text-white py-2 px-4"
              >
                Edit
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center text-white text-xs uppercase">
            No tasks added yet
          </div>
        )}
      </main>
    </>
  );
}

export default TodoList;
