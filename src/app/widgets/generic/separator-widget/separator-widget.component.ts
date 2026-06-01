import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { BaseWidget } from '../../base-widget';
import { SeparatorWidgetOptions } from './separator-widget.options';

@Component({
  selector: 'app-separator-widget',
  imports: [CommonModule],
  templateUrl: './separator-widget.component.html',
})
export class SeparatorWidget extends BaseWidget {
  protected readonly separatorOptions = computed(
    () => this.options() as SeparatorWidgetOptions,
  );
}
