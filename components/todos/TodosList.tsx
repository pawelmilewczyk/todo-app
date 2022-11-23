"use client";

import { initFilters } from "consts/filters";
import { useState } from "react";
import { TodoInterface } from "types/todos";
import SingleTodo from "./SingleTodo";
import TodosFilters from "./TodosFilters";

interface Props {
  todos: TodoInterface[];
}

function TodosList({ todos: initTodos }: Props) {
  const [todos, setTodos] = useState(initTodos);
  const [filters, setFilters] = useState(initFilters);

  return (
    <main className="flex flex-col gap-y-4 mt-4 text-white">
      <TodosFilters filters={filters} setFilters={setFilters} />
      <div className="flex flex-col gap-y-4 mt-4">
        {todos.length ? (
          todos.map((props) => <SingleTodo {...props} key={props.id} />)
        ) : (
          <p className="text-center text-xs uppercase">No tasks added yet</p>
        )}
      </div>
    </main>
  );
}

export default TodosList;
