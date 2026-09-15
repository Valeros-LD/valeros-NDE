import type { HelpMedia } from './types';

function publicAssetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

function MediaItem({ media }: { media: HelpMedia }) {
  if (media.type === 'image') {
    return (
      <img
        alt={media.alt}
        className="h-auto max-h-[70vh] w-full object-contain"
        src={publicAssetUrl(media.src)}
      />
    );
  }

  return (
    <video
      aria-label={media.title}
      className="max-h-[70vh] w-full"
      controls
      poster={media.poster ? publicAssetUrl(media.poster) : undefined}
      preload="metadata"
    >
      <source src={publicAssetUrl(media.src)} />
    </video>
  );
}

export function HelpMediaContent({ media }: { media: HelpMedia[] }) {
  return (
    <div className="grid gap-4">
      {media.map((item) => (
        <MediaItem key={`${item.type}-${item.src}`} media={item} />
      ))}
    </div>
  );
}
