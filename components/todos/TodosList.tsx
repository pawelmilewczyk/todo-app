"use client";

import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import { useContext, useEffect } from "react";
import { TodoFilter, TodoInterface } from "types/todos";
import SingleTodo from "./SingleTodo";
import TodosFilters from "./TodosFilters";

interface Props {
  todos: TodoInterface[];
}

function TodosList({ todos: initTodos }: Props) {
  const {
    state: { todos, filters },
    dispatch,
  } = useContext(TodosContext);

  useEffect(() => {
    dispatch({ type: TodoAction.SetTodos, payload: initTodos });
  }, []);

  const filterTodos = (filters: TodoFilter[]) => (todo: TodoInterface) => {
    return true;
  };

  return (
    <main className="flex flex-col gap-y-4 mt-4 text-white">
      <TodosFilters />
      <div className="flex flex-col gap-y-4 mt-4">
        {todos.length ? (
          todos
            .filter(filterTodos(filters))
            .map((props) => <SingleTodo {...props} key={props.id} />)
        ) : (
          <p className="text-center text-xs uppercase">No tasks added yet</p>
        )}
      </div>
    </main>
  );
}

export default TodosList;
