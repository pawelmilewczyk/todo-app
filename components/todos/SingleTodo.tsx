"use client";

import { TodoInterface } from "types/todos";
import Actions from "./elements/TodoActions";
import Checkbox from "./elements/TodoCheckbox";
import Deadline from "./elements/TodoDate";
import TodoLabel from "./elements/TodoLabel";

function SingleTodo(todo: TodoInterface) {
  return (
    <div>
      <div
        className="grid grid-cols-[min-content_1fr_min-content] gap-x-2 items-center justify-between h-full 
        overflow-hidden bg-zinc-600 rounded-md"
      >
        <Checkbox todo={todo} className="row-start-1 row-end-3" />
        <TodoLabel todo={todo} />
        <Actions
          todo={todo}
          className="col-start-3 col-end-4 row-start-1 row-end-3"
        />
        <Deadline todo={todo} className="col-start-2 col-end-3" />
      </div>
    </div>
  );
}

export default SingleTodo;
