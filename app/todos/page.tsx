import TodoTags from "components/TodoTags";
import { TODO_TAGS } from "mock/todos";

async function fetchTags() {
  return TODO_TAGS;
}

async function Todos() {
  const tags = await fetchTags();

  return (
    <main className="text-center text-lg text-white">
      <TodoTags tags={tags} />
    </main>
  );
}

export default Todos;
