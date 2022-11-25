"use client";

import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import { useContext, useEffect, useState } from "react";
import { TodoInterface } from "types/todos";
import SingleTodo from "./SingleTodo";
import { checkTodos, filterTodos } from "./todos.utils";
import TodosFilters from "../filters/TodoFilters";
import LoadingSkeleton from "components/layout/LoadingSkeleton";

interface Props {
  todos: TodoInterface[];
}

function TodosList({ todos: initTodos }: Props) {
  const [loading, setLoading] = useState(true);
  const {
    state: { todos, filters },
    dispatch,
  } = useContext(TodosContext);

  useEffect(() => {
    dispatch({ type: TodoAction.SetTodos, payload: initTodos });
    setLoading(false);
  }, []);

  const { allCompleted, emptyList } = checkTodos(todos, filters, loading);

  return (
    <main className="flex flex-col gap-y-4 mt-4 text-white">
      <TodosFilters />
      <div className="flex flex-col gap-y-4 mt-4">
        {loading && <LoadingSkeleton />}
        {emptyList ? (
          <p className="text-center text-xs uppercase">No tasks added yet</p>
        ) : allCompleted ? (
          <p className="text-center text-xs uppercase">All tasks completed!</p>
        ) : (
          todos
            .filter(filterTodos(filters))
            .map((props) => <SingleTodo {...props} key={props.id} />)
        )}
      </div>
    </main>
  );
}

export default TodosList;
