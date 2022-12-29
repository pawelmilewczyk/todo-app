import { PropsWithChildren, useCallback, useEffect } from "react";
import CloseIcon from "icons/CloseIcon";
import IconButton from "./IconButton";
import Button from "./Button";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

function Modal({ open, onClose, children }: Props) {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[20rem] bg-zinc-700 z-30 p-2 rounded-md flex flex-col gap-4">
        {/* Header */}
        <div className="text-white flex items-center justify-between">
          <h2 className="text-3xl">Title</h2>
          <IconButton onClick={onClose}>
            <CloseIcon size="md" />
          </IconButton>
        </div>
        {/* Content */}
        <div>Content</div>
        {/* Footer */}
        <div className="flex gap-2 text-sm">
          <Button label="Cancel" onClick={onClose} />
          <Button label="Delete" color="danger" onClick={() => {}} />
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
