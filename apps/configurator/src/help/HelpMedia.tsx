import { HelpMediaDialog } from './HelpMediaDialog';
import { HelpMediaInline } from './HelpMediaInline';
import type { FieldHelp } from './types';

export function HelpMedia({ help }: { help: FieldHelp }) {
  return help.display === 'inline' ? (
    <HelpMediaInline help={help} />
  ) : (
    <HelpMediaDialog help={help} />
  );
}
