import { Component, computed } from '@angular/core';
import {
  AssociatedMediaNode,
  hasIIIFPresentationManifest,
} from '../../../node/types/associated-media.node';
import { BaseWidget } from '../../base-widget';
import { MiradorIiifWidget } from '../iiif-widget/mirador-iiif-widget/mirador-iiif-widget.component';
import { TifyIiifWidget } from '../iiif-widget/tify-iiif-widget/tify-iiif-widget.component';
import { UniversalviewerIiifWidget } from '../iiif-widget/universalviewer-iiif-widget/universalviewer-iiif-widget.component';
import { ImageGalleryWidget } from '../image-gallery-widget/image-gallery-widget.component';
import { MediaWidgetOptions } from './media-widget.options';

@Component({
  selector: 'app-media-widget',
  imports: [
    ImageGalleryWidget,
    TifyIiifWidget,
    MiradorIiifWidget,
    UniversalviewerIiifWidget,
  ],
  templateUrl: './media-widget.component.html',
})
export class MediaWidget extends BaseWidget {
  readonly hasManifest = computed(() => {
    const media = this.values() as AssociatedMediaNode[];
    return hasIIIFPresentationManifest(media);
  });

  readonly viewerType = computed(() => {
    return (this.options() as MediaWidgetOptions).iiifViewer ?? 'tify';
  });
}
