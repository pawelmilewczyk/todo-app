import { routes } from "consts/routes";
import Link from "next/link";
import { TODO_TAGS } from "mock/todos";

function TodoTags() {
  return (
    <div className="flex flex-col gap-y-2">
      {TODO_TAGS.map((tag) => (
        <Link
          key={tag}
          className="p-2 bg-zinc-600 text-white text-center uppercase rounded-md"
          href={`${routes.todos}/${tag}`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}

export default TodoTags;
