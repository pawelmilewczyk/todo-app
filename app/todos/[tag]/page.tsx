import SingleTodo from "components/SingleTodo";
import { routes } from "consts/routes";
import { FILTERS, TODO_LIST_DATA, TODO_TAGS } from "mock/todos";
import Link from "next/link";

export interface TodoProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  return TODO_TAGS.map(({ tag }) => ({ tag }));
}

async function fetchTodos(tag: string) {
  return TODO_LIST_DATA.filter((todo) => todo.tag === tag);
}

async function TodoList({ params }: TodoProps) {
  const todos = await fetchTodos(params.tag);

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
      <main className="flex flex-col gap-y-4 mt-4 text-white">
        <div className="flex gap-x-2 items-center justify-center uppercase text-xs">
          {FILTERS.map(({ group, filters }, index) => (
            <>
              {!!index && <span>|</span>}
              <div key={group} className="flex gap-x-2">
                {filters.map(({ label, active }) => (
                  <span
                    key={label}
                    className={`px-2 py-1 rounded-sm text-white cursor-pointer ${
                      active && "text-zinc-800 bg-white"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          {todos.length ? (
            todos.map((props) => <SingleTodo {...props} key={props.id} />)
          ) : (
            <p className="text-center text-xs uppercase">No tasks added yet</p>
          )}
        </div>
      </main>
    </>
  );
}

export default TodoList;
