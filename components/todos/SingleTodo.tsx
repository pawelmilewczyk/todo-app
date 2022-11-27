import Checkbox from "components/ui/Checkbox";
import { routes } from "consts/routes";
import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

function SingleTodo({
  id,
  completed,
  group,
  title,
  description,
}: TodoInterface) {
  const { dispatch } = useContext(TodosContext);

  const { push } = useRouter();

  const onChange = async (completed: boolean) => {
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

  const actions = [
    {
      label: "Edit",
      color: "blue",
      onClick: () => {
        push(`${routes.todos}/${group}/${id}`);
      },
    },
    { label: "Delete", color: "red", onClick: () => {} },
  ];

  return (
    <div className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between overflow-hidden">
      <div className="relative">
        <Checkbox
          label={title}
          defaultChecked={completed}
          onChange={onChange}
        />
        {description && (
          <p className="text-xs text-zinc-300 pointer-events-none -mt-3 ml-12 pl-1 pb-2">
            {description}
          </p>
        )}
      </div>
      <div className="flex text-white text-sm h-full">
        {actions.map(({ label, color, onClick }) => (
          <div
            key={label}
            onClick={onClick}
            className={`h-full w-16 hover:bg-${color}-500 cursor-pointer transition-colors`}
          >
            <button
              className={`flex items-center justify-center h-full w-full outline-none transition-colors 
              pointer-events-none focus:bg-${color}-500`}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleTodo;
