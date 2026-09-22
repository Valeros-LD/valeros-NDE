import { ReactNode } from 'react';

export type HelpImage = {
  type: 'image';
  src: string;
  alt: string;
};

export type HelpVideo = {
  type: 'video';
  src: string;
  title: string;
  poster?: string;
};

export type HelpMedia = HelpImage | HelpVideo;

type FieldHelpContent = {
  title?: string;
  description?: ReactNode;
  media: HelpMedia[];
};

export type DialogFieldHelp = FieldHelpContent & {
  display?: 'dialog';
  linkLabel?: string;
};

export type InlineFieldHelp = FieldHelpContent & {
  display: 'inline';
};

export type FieldHelp = DialogFieldHelp | InlineFieldHelp;

export function isFieldHelp(value: unknown): value is FieldHelp {
  if (value === null || typeof value !== 'object') return false;

  const help = value as Partial<FieldHelp>;

  const hasValidTitle =
    help.title === undefined || typeof help.title === 'string';
  const hasValidMedia = Array.isArray(help.media);

  if (!hasValidTitle || !hasValidMedia) return false;

  switch (help.display) {
    case 'inline':
      return true;
    case undefined:
    case 'dialog':
      return (
        !('linkLabel' in help) ||
        help.linkLabel === undefined ||
        typeof help.linkLabel === 'string'
      );
    default:
      return false;
  }
}
