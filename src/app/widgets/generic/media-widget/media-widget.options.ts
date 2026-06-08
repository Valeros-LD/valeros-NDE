import { WidgetOptions } from '../../core/types/node-presentation-config';

export type IIIFViewerType = 'tify' | 'mirador' | 'universalviewer';

export interface MediaWidgetOptions extends WidgetOptions {
  iiifViewer?: IIIFViewerType;
}
