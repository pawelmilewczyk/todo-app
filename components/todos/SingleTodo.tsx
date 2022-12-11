import Checkbox from "components/ui/Checkbox";
import { routes } from "consts/routes";
import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import { DeleteIcon } from "icons/DeleteIcon";
import { EditIcon } from "icons/EditIcon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

function SingleTodo({ id, completed, group, title }: TodoInterface) {
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
      Icon: EditIcon,
      onClick: () => {
        push(`${routes.todos}/${group}/${id}`);
      },
    },
    { label: "Delete", Icon: DeleteIcon, onClick: () => {} },
  ];

  return (
    <div className="flex bg-zinc-600 rounded-md gap-x-3 items-center justify-between overflow-hidden">
      <Checkbox label={title} defaultChecked={completed} onChange={onChange} />
      <div className="flex text-white text-sm h-full">
        {actions.map(({ label, onClick, Icon }) => (
          <div
            key={label}
            onClick={onClick}
            className={`h-full hover:bg-zinc-500 cursor-pointer transition-colors`}
          >
            <button
              aria-label={label}
              className={`flex items-center justify-center h-full w-full px-2 outline-none transition-colors 
              pointer-events-none focus:bg-zinc-500`}
            >
              <Icon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleTodo;
