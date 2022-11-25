import Checkbox from "components/ui/Checkbox";
import { routes } from "consts/routes";
import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import Link from "next/link";
import { ChangeEventHandler, useContext } from "react";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

function SingleTodo({ id, completed, group, title }: TodoInterface) {
  const { dispatch } = useContext(TodosContext);
  const onChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const completed = e.target.checked;
    const { ok } = await fetchData({
      url: `/todos/${group}/${id}`,
      method: "PUT",
      body: { completed },
    });
    if (ok) {
      dispatch({
        type: TodoAction.UpdateTodo,
        payload: { id, data: { completed } },
      });
    }
  };

  return (
    <div className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between">
      <Checkbox label={title} defaultChecked={completed} onChange={onChange} />
      <div className="text-white text-sm">
        <Link href={`${routes.todos}/${group}/${id}`} className="p-4">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default SingleTodo;
