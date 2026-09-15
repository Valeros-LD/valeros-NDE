import { useId, useRef } from 'react';
import { HelpMediaContent } from './HelpMediaContent';
import type { DialogFieldHelp } from './types';

export function HelpMediaDialog({ help }: { help: DialogFieldHelp }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  function resetVideos() {
    dialogRef.current?.querySelectorAll('video').forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        aria-haspopup="dialog"
        className="link link-primary text-sm"
        onClick={() => dialogRef.current?.showModal()}
        type="button"
      >
        {help.linkLabel ?? 'See an example'}
      </button>
      <dialog
        aria-labelledby={titleId}
        className="modal"
        onClose={resetVideos}
        ref={dialogRef}
      >
        <div className="modal-box max-w-4xl">
          <h2 className="text-xl font-bold" id={titleId}>
            {help.title}
          </h2>
          {help.description && <p className="mt-2">{help.description}</p>}
          <div className="mt-4">
            <HelpMediaContent media={help.media} />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={closeDialog} type="button">
              Close
            </button>
          </div>
        </div>
        <button
          aria-label="Close help dialog"
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
