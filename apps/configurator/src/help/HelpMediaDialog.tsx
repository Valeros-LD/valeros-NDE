import { Dialog } from '../Dialog';
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
      triggerClassName="link link-primary text-sm"
      triggerLabel={help.linkLabel ?? 'See an example'}
    >
      {help.description && <p className="text-lg">{help.description}</p>}
      <div className={help.description ? 'mt-4' : ''}>
        <HelpMediaContent media={help.media} />
      </div>
    </Dialog>
  );
}
