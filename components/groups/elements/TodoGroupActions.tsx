import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteGroup } from "api/groups";
import Modal from "components/ui/Modal";
import { staticGroups } from "consts/groups";
import { getSingleGroupRoute } from "consts/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TodoGroupInterface } from "types/todos";

function TodoGroupActions({ name }: Pick<TodoGroupInterface, "name">) {
  const [open, setOpen] = useState(false);
  const { push, refresh } = useRouter();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const onDelete = async () => {
    const { ok } = await deleteGroup(name);
    if (ok) refresh();
  };

  const actions = [
    {
      label: "Edit",
      icon: faPen,
      onClick: () => push(getSingleGroupRoute(name)),
    },
    {
      label: "Delete",
      icon: faTrash,
      onClick: openModal,
    },
  ];

  return staticGroups.every((group) => group.name !== name) ? (
    <>
      <div className="absolute top-0 right-0 overflow-hidden flex">
        {actions.map(({ label, icon, onClick }) => (
          <button
            key={label}
            title={label}
            aria-label={label}
            className="p-1 hover:text-zinc-100"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={icon} size="xs" fixedWidth />
          </button>
        ))}
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        title="Deleting group"
        content={`Do you want to delete "${name}" group?`}
        onSubmit={onDelete}
      />
    </>
  ) : null;
}

export default TodoGroupActions;
