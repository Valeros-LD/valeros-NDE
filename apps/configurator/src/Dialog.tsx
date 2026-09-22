import { type ReactNode, useId, useRef } from 'react';

type DialogProps = {
  children: ReactNode;
  closeAriaLabel?: string;
  onClose?: (dialog: HTMLDialogElement) => void;
  title: string;
  triggerClassName: string;
  triggerLabel: ReactNode;
};

export function Dialog({
  children,
  closeAriaLabel,
  onClose,
  title,
  triggerClassName,
  triggerLabel,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleClose() {
    if (dialogRef.current) {
      onClose?.(dialogRef.current);
    }
  }

  return (
    <>
      <button
        aria-haspopup="dialog"
        className={triggerClassName}
        onClick={() => dialogRef.current?.showModal()}
        type="button"
      >
        {triggerLabel}
      </button>
      <dialog
        aria-labelledby={titleId}
        className="modal"
        onClose={handleClose}
        ref={dialogRef}
      >
        <div className="modal-box max-w-4xl">
          <h2 className="text-xl font-bold" id={titleId}>
            {title}
          </h2>
          <div className="mt-4">{children}</div>
          <div className="modal-action">
            <button className="btn" onClick={closeDialog} type="button">
              Close
            </button>
          </div>
        </div>
        <button
          aria-label={closeAriaLabel ?? `Close ${title} dialog`}
          className="modal-backdrop"
          onClick={closeDialog}
          type="button"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
