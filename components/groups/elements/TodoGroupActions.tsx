import Modal from "components/ui/Modal";
import { staticGroups } from "consts/groups";
import { getSingleGroupRoute } from "consts/routes";
import DeleteIcon from "icons/DeleteIcon";
import EditIcon from "icons/EditIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

function TodoGroupActions({ name }: TodoGroupInterface) {
  const [open, setOpen] = useState(false);
  const { push, refresh } = useRouter();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const deleteGroup = async () => {
    const { ok } = await fetchData({
      url: getSingleGroupRoute(name),
      method: "DELETE",
    });
    if (ok) refresh();
  };

  const actions = [
    {
      label: "Edit",
      Icon: EditIcon,
      onClick: () => push(getSingleGroupRoute(name)),
    },
    {
      label: "Delete",
      Icon: DeleteIcon,
      onClick: openModal,
    },
  ];

  return staticGroups.every((group) => group.name !== name) ? (
    <>
      <div className="absolute top-0 right-0 overflow-hidden flex">
        {actions.map(({ label, Icon, onClick }) => (
          <button
            key={label}
            title={label}
            aria-label={label}
            className="p-1 hover:text-zinc-100"
            onClick={onClick}
          >
            <Icon />
          </button>
        ))}
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        title="Deleting group"
        content={`Do you want to delete "${name}" group?`}
        onSubmit={deleteGroup}
      />
    </>
  ) : null;
}

export default TodoGroupActions;
