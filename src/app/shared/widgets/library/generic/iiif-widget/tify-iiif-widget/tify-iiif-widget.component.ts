import { Component } from '@angular/core';
import Tify, { TifyView } from 'tify';
import { BaseIiifWidget } from '../base-iiif-widget';
import 'tify/dist/tify.css';

interface IIIFManifest {
  sequences?: Array<{ canvases?: unknown[] }>;
  items?: unknown[];
}

@Component({
  selector: 'app-tify-iiif-widget',
  imports: [],
  templateUrl: '../base-iiif-widget.html',
  styles: [
    `
      :host ::ng-deep {
        --tify-body-bg: lightgrey;
      }
    `,
  ],
})
export class TifyIiifWidget extends BaseIiifWidget<Tify> {
  private readonly defaultView: TifyView = null;

  protected async initializeViewer(
    manifestUrl: string,
    elementId: string,
  ): Promise<void> {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    // TODO: Remove dev CORS proxy
    const proxiedManifestUrl = `https://corsproxy.io/?${encodeURIComponent(manifestUrl)}`;

    const instance = new Tify({
      container: `#${elementId}`,
      manifestUrl: proxiedManifestUrl,
      view: this.defaultView,
    });

    this.instances.set(elementId, instance);

    this.setViewBasedOnManifest(proxiedManifestUrl, instance);
  }

  private async setViewBasedOnManifest(
    manifestUrl: string,
    instance: Tify,
  ): Promise<void> {
    try {
      const response = await fetch(manifestUrl);
      const manifest: IIIFManifest = await response.json();

      const canvasCount =
        manifest.sequences?.reduce(
          (total, seuquence) => total + (seuquence.canvases?.length ?? 0),
          0,
        ) ??
        manifest.items?.length ??
        0;

      const view = canvasCount > 1 ? 'thumbnails' : null;
      if (view !== this.defaultView) {
        setTimeout(() => instance.setView(view));
      }
    } catch (error) {
      console.error(
        'Failed to fetch manifest, defaulting to thumbnails view:',
        error,
      );
    }
  }

  protected destroyInstances(): void {
    this.instances.forEach((instance: Tify) => {
      instance.destroy();
    });
  }
}
