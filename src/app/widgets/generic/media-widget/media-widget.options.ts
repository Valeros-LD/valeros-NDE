import { BaseWidgetOptions } from '../../core/types/node-presentation-config';

export type IIIFViewerType = 'tify' | 'mirador' | 'universalviewer';

export interface MediaWidgetOptions extends BaseWidgetOptions {
  iiifViewer?: IIIFViewerType;
}
