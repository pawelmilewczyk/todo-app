import { initGroups } from "consts/groups";
import { routes } from "consts/routes";
import { DeleteIcon } from "icons/DeleteIcon";
import { EditIcon } from "icons/EditIcon";
import Link from "next/link";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchGroups() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response;
}

async function TodoGroupsPage() {
  const groups = await fetchGroups();

  return (
    <main className="text-center text-lg text-white pt-4">
      {groups ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
          {[...initGroups, ...groups].map(({ id, name }) => (
            <div
              key={id}
              className="relative flex flex-col overflow-hidden rounded-md text-zinc-400"
            >
              <div className="absolute top-0 right-0 overflow-hidden flex">
                <Link
                  className="p-1 hover:text-zinc-100 overflow-hidden"
                  href={`${routes.todos}/${name}`}
                >
                  <EditIcon size="1rem" />
                </Link>
                <button className="p-1 hover:text-zinc-100">
                  <DeleteIcon size="1rem" />
                </button>
              </div>
              <Link
                className="py-10 bg-zinc-600 text-white text-center uppercase transition-colors hover:bg-zinc-500 outline-none focus-visible:bg-zinc-500 focus-visible:outline-zinc-400"
                href={`${routes.todos}/${name}/list`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        "Couldn't load data"
      )}
    </main>
  );
}

export default TodoGroupsPage;
