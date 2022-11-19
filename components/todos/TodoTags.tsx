import { routes } from "consts/routes";
import Link from "next/link";
import { TodoTagInterface } from "types/todos";

interface Props {
  tags: TodoTagInterface[];
}

function TodoTags({ tags }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      {tags.map(({ id, tag }) => (
        <Link
          key={id}
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
