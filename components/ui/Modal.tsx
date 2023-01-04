import { PropsWithChildren, useCallback, useEffect } from "react";
import Button from "./Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props extends PropsWithChildren {
  open: boolean;
  title: string;
  content?: string;
  onSubmit: () => void;
  onClose: () => void;
}

function Modal({ open, onClose, onSubmit, title, content, children }: Props) {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey, false);
    return () => {
      document.removeEventListener("keydown", handleEscKey, false);
    };
  }, [handleEscKey]);

  return open ? (
    <div className="fixed w-screen h-screen inset-0 z-10" role="dialog">
      {/* Backdrop */}
      <div
        className="absolute w-full h-full bg-black/50 z-20"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[20rem] sm:min-w-[30rem] text-zinc-100 bg-zinc-700 z-30 p-2 rounded-md flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">{title}</h2>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={onClose}
            className="w-6 h-6 p-1 cursor-pointer rounded-full hover:bg-zinc-500"
          />
        </div>
        {/* Content */}
        {content && <p className="text-center">{content}</p>}
        {children}
        {/* Footer */}
        <div className="flex gap-2 text-sm justify-center">
          <Button label="Cancel" onClick={onClose} />
          <Button label="Delete" color="red" onClick={onSubmit} />
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
