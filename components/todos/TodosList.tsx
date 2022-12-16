"use client";

import { TodoInterface } from "types/todos";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: TodoInterface[];
}

function TodosList({ todos }: Props) {
  return (
    <div className="h-full flex flex-col gap-y-4 overflow-auto px-4 my-2">
      {todos
        ? todos.map((props) => <SingleTodo {...props} key={props.id} />)
        : "Something went wrong"}
    </div>
  );
}

export default TodosList;
