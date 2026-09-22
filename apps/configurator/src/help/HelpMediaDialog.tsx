import { Dialog } from '../Dialog';
import questionCircleIcon from '../assets/question-circle.svg';
import { HelpMediaContent } from './HelpMediaContent';
import type { DialogFieldHelp } from './types';

export function HelpMediaDialog({ help }: { help: DialogFieldHelp }) {
  function resetVideos(dialog: HTMLDialogElement) {
    dialog.querySelectorAll('video').forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  return (
    <Dialog
      closeAriaLabel="Close help dialog"
      onClose={resetVideos}
      title={help.title || ''}
      triggerClassName="btn btn-xs gap-1 min-h-0 h-auto py-0.5 px-2 text-[0.7rem] font-light opacity-75"
      triggerLabel={
        <>
          <img
            src={questionCircleIcon}
            alt=""
            aria-hidden="true"
            className="size-3 mr-[0.1rem]"
          />
          {help.linkLabel ?? 'See an example'}
        </>
      }
    >
      {help.description && <p className="text-lg">{help.description}</p>}
      {help.media.length > 0 && (
        <div className={help.description ? 'mt-4' : ''}>
          <HelpMediaContent media={help.media} />
        </div>
      )}
    </Dialog>
  );
}
