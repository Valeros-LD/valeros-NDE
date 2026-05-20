import {
  Directive,
  AfterViewInit,
  OnDestroy,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { BaseWidget } from '../../../infrastructure/base-widget';
import {
  AssociatedMediaNode,
  isIIIFPresentationManifest,
} from '../../../../node/types/associated-media.node';
import { IiifUrlTransformerService } from './iiif-url-transformer.service';

@Directive()
export abstract class BaseIiifWidget<T = unknown>
  extends BaseWidget
  implements AfterViewInit, OnDestroy
{
  protected readonly urlTransformer = inject(IiifUrlTransformerService);
  protected readonly instanceId = crypto.randomUUID();
  protected readonly instances: Map<string, T> = new Map();

  manifestUrls: Signal<string[]> = computed(() => {
    return (this.values() as AssociatedMediaNode[])
      .filter(isIIIFPresentationManifest)
      .map((v) => v.id)
      .filter((url): url is string => typeof url === 'string' && url !== '');
  });

  ngAfterViewInit(): void {
    this.manifestUrls().forEach((manifestUrl, index) => {
      const elementId = this.getElementId(index);
      const transformedManifestUrl =
        this.urlTransformer.transformManifestUrl(manifestUrl);
      void this.initializeViewer(transformedManifestUrl, elementId);
    });
  }

  ngOnDestroy(): void {
    this.destroyInstances();
    this.instances.clear();
  }

  protected abstract initializeViewer(
    manifestUrl: string,
    elementId: string,
  ): void | Promise<void>;

  protected abstract destroyInstances(): void;

  protected getElementId(index: number): string {
    return `iiif-viewer-${this.instanceId}-${index}`;
  }
}
