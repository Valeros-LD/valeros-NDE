import { Component } from '@angular/core';
import Mirador, { MiradorConfig, MiradorInstance } from 'mirador';
import { BaseIiifWidget } from '../base-iiif-widget';

@Component({
  selector: 'app-mirador-iiif-widget',
  imports: [],
  templateUrl: '../base-iiif-widget.html',
})
export class MiradorIiifWidget extends BaseIiifWidget<MiradorInstance> {
  protected initializeViewer(manifestUrl: string, elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    const config: MiradorConfig = {
      id: elementId,
      windows: [
        {
          manifestId: manifestUrl,
          thumbnailNavigationPosition: 'far-right',
          thumbnailNavigationVisible: true,
        },
      ],
      window: {
        allowClose: false,
        allowMaximize: true,
        sideBarOpenByDefault: false,
      },
      workspace: {
        showZoomControls: true,
      },
      workspaceControlPanel: {
        enabled: false,
      },
    };

    // TODO: Fix UI updating issue (Mirador UI does not seem to update on page changes)
    const instance = Mirador.viewer(config);

    this.instances.set(elementId, instance);
  }

  protected destroyInstances(): void {
    this.instances.forEach((instance: MiradorInstance) => {
      instance.unmount();
    });
  }
}
