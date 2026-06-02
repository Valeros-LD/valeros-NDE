import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSettings, featherX } from '@ng-icons/feather-icons';
import { ConfigPageComponent } from '../config-page/config-page.component';

@Component({
  selector: 'app-config-panel',
  imports: [NgIconComponent, ConfigPageComponent, CdkDrag, CdkDragHandle],
  templateUrl: './config-panel.component.html',
  viewProviders: [provideIcons({ featherSettings, featherX })],
})
export class ConfigPanelComponent {
  protected readonly isPanelOpen = signal(false);

  togglePanel(): void {
    this.isPanelOpen.update((isOpen) => !isOpen);
  }

  closePanel(): void {
    this.isPanelOpen.set(false);
  }
}
