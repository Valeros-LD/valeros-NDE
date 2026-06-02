import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAlertTriangle } from '@ng-icons/feather-icons';
import { FacetsConfig } from './facets-config/facets-config.component';
import { ViewsConfigComponent } from './views-config/views-config.component';

@Component({
  selector: 'app-config-page',
  imports: [FacetsConfig, ViewsConfigComponent, NgIconComponent],
  templateUrl: './config-page.component.html',
  viewProviders: [provideIcons({ featherAlertTriangle })],
})
export class ConfigPageComponent {}
