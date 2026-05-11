import { Component } from '@angular/core';
import { init, Viewer } from 'universalviewer';
import { BaseIiifWidget } from '../base-iiif-widget';
import 'universalviewer/dist/uv.css';
import 'universalviewer/dist/esm/index.css';

@Component({
  selector: 'app-universalviewer-iiif-widget',
  imports: [],
  templateUrl: '../base-iiif-widget.html',
})
export class UniversalviewerIiifWidget extends BaseIiifWidget<Viewer> {
  protected initializeViewer(manifestUrl: string, elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    element.classList.add('uv');

    const proxiedManifestUrl = `https://corsproxy.io/?${encodeURIComponent(manifestUrl)}`;

    const instance = init(elementId, {
      manifest: proxiedManifestUrl,
      embedded: true,
    });

    this.instances.set(elementId, instance);
  }

  protected destroyInstances(): void {
    this.instances.forEach((instance: Viewer) => {
      instance.dispose();
    });
  }
}
