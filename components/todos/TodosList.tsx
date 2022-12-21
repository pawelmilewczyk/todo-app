"use client";

import { useMemo } from "react";
import { Filters } from "types/filters";
import { TodosFetchInterface } from "types/todos";
import SingleTodo from "./SingleTodo";

interface Props {
  data: TodosFetchInterface;
  filters: Filters;
}

function TodosList({ data: { list, isEmpty }, filters }: Props) {
  const info = useMemo(() => {
    if (isEmpty) return "You haven't added any task yet... 🥺";
    else if (!list.length && filters.completed)
      return "You haven't completed any task yet... 🤨";
    else if (!list.length && filters.completed === false)
      return "You have completed all tasks! 🔥";
  }, [isEmpty, list, filters]);

  return (
    <div className="h-full flex flex-col gap-y-4 overflow-auto px-4 my-2">
      {info && <p className="text-center">{info}</p>}
      {!!list.length &&
        list.map((props) => <SingleTodo {...props} key={props.id} />)}
    </div>
  );
}

export default TodosList;
