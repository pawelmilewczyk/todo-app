import { deleteTodo } from "api/todos";
import Modal from "components/ui/Modal";
import { getSingleTodoRoute } from "consts/routes";
import DeleteIcon from "icons/DeleteIcon";
import EditIcon from "icons/EditIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TodoElementProps } from "./elements.types";

function TodoActions({ todo: { name, id }, className }: TodoElementProps) {
  const [open, setOpen] = useState(false);
  const { push, refresh } = useRouter();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const onDelete = async () => {
    const { ok } = await deleteTodo(id);
    if (ok) refresh();
  };

  const actions = [
    {
      label: "Edit",
      Icon: EditIcon,
      onClick: () => push(getSingleTodoRoute(id)),
    },
    {
      label: "Delete",
      Icon: DeleteIcon,
      onClick: openModal,
    },
  ];

  return (
    <>
      <div className={`${className} flex text-white text-sm h-full`}>
        {actions.map(({ label, onClick, Icon }) => (
          <button
            key={label}
            title={label}
            aria-label={label}
            onClick={onClick}
            className="flex items-center justify-center h-full w-full px-2 hover:bg-zinc-500 cursor-pointer outline-none transition-colors focus:bg-zinc-500"
          >
            <Icon size="md" />
          </button>
        ))}
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        title="Deleting task"
        content={`Do you want to delete "${name}" task?`}
        onSubmit={onDelete}
      />
    </>
  );
}

export default TodoActions;
