import { getEditTodoRoute } from "consts/routes";
import { DeleteIcon } from "icons/DeleteIcon";
import { EditIcon } from "icons/EditIcon";
import { useRouter } from "next/navigation";
import { TodoElementProps } from "./elements.types";

function TodoActions({ todo: { group, id }, className }: TodoElementProps) {
  const { push } = useRouter();

  const actions = [
    {
      label: "Edit",
      Icon: EditIcon,
      onClick: () => push(getEditTodoRoute(group, id)),
    },
    { label: "Delete", Icon: DeleteIcon, onClick: () => {} },
  ];

  return (
    <div className={`${className} flex text-white text-sm h-full`}>
      {actions.map(({ label, onClick, Icon }) => (
        <div
          key={label}
          onClick={onClick}
          className="h-full hover:bg-zinc-500 cursor-pointer transition-colors"
        >
          <button
            aria-label={label}
            className="flex items-center justify-center h-full w-full px-2 outline-none transition-colors pointer-events-none focus:bg-zinc-500"
          >
            <Icon />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoActions;
