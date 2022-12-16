"use client";

import Checkbox from "components/ui/Checkbox";
import { getEditGroupRoute, routes } from "consts/routes";
import { DeleteIcon } from "icons/DeleteIcon";
import { EditIcon } from "icons/EditIcon";
import { useRouter } from "next/navigation";
import { TodoInterface } from "types/todos";
import fetchData from "utils/fetchData";

function SingleTodo({ id, completed, group, title, deadline }: TodoInterface) {
  const { push, refresh } = useRouter();

  const onChange = async (completed: boolean) => {
    const { ok } = await fetchData({
      url: `/todos/${group}/${id}`,
      method: "PUT",
      body: { completed },
    });
    if (ok) refresh();
  };

  const actions = [
    {
      label: "Edit",
      Icon: EditIcon,
      onClick: () => push(getEditGroupRoute(group, id)),
    },
    { label: "Delete", Icon: DeleteIcon, onClick: () => {} },
  ];

  return (
    <div>
      <div className="h-full flex overflow-hidden gap-x-3 items-center justify-between bg-zinc-600 rounded-md">
        <Checkbox
          label={title}
          defaultChecked={completed}
          onChange={onChange}
        />
        {deadline && <span>{deadline}</span>}
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
    </div>
  );
}

export default SingleTodo;
