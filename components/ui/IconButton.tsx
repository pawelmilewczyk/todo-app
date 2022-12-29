import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick: () => void;
}

function IconButton({ onClick, children }: Props) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer p-1 leading-none rounded-full outline-none transition
    hover:bg-zinc-600 active:scale-95 focus-visible:outline-zinc-300"
    >
      {children}
    </button>
  );
}

export default IconButton;
