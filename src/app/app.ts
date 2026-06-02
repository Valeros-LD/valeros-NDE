import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigPanelComponent } from './config/config-panel/config-panel.component';

@Component({
  imports: [RouterModule, ConfigPanelComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
