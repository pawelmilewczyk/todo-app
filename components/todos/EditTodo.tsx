import { TodoInterface } from "types/todos";

function EditTodo({ title, tag, completed }: TodoInterface) {
  return (
    <div>
      <h1>title: {title}</h1>
      <h2>tag: {tag}</h2>
      <p>completed: {String(completed)}</p>
    </div>
  );
}

export default EditTodo;
