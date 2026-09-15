import { useId } from 'react';
import { HelpMediaContent } from './HelpMediaContent';
import type { InlineFieldHelp } from './types';

export function HelpMediaInline({ help }: { help: InlineFieldHelp }) {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="p-4"
    >
      <h2 className="text-lg font-semibold" id={titleId}>
        {help.title}
      </h2>
      {help.description && <p className="mt-1 mb-4">{help.description}</p>}
      <HelpMediaContent media={help.media} />
    </section>
  );
}
