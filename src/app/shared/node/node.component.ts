import { Component, input, inject, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArrowIndicatorComponent } from './arrow-indicator/arrow-indicator.component';
import { WidgetService } from '../widgets/infrastructure/widget.service';
import { DynamicWidgetComponent } from '../widgets/infrastructure/dynamic-widget/dynamic-widget.component';
import { WidgetsByPosition } from '../widgets/types/widgets-by-position';
import { WidgetsSettings } from '../widgets/types/widget-config';
import { NodeModel } from './types/node.model';

@Component({
  selector: 'app-node',
  imports: [
    CommonModule,
    DynamicWidgetComponent,
    RouterLink,
    ArrowIndicatorComponent,
  ],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
  host: {
    class: 'block',
  },
})
export class NodeComponent {
  data = input.required<NodeModel>();
  clickable = input<boolean>(true);
  widgetsSettings = input<WidgetsSettings>();

  private widgetService = inject(WidgetService);

  private resolvedWidgetsSettings = computed(
    () => this.widgetsSettings() ?? this.widgetService.getDefaultSettings(),
  );

  widgetsByPosition: Signal<WidgetsByPosition> = computed(() => {
    const properties = Object.keys(this.data());
    return this.widgetService.getWidgetsByPosition(
      properties,
      this.resolvedWidgetsSettings(),
    );
  });

  protected showArrowIndicator = computed(
    () => this.resolvedWidgetsSettings().showArrowIndicator ?? false,
  );

  detailsRoute = computed(() => {
    const id = this.data().id;
    return id ? ['/details'] : null;
  });

  detailsQueryParams = computed(() => {
    const id = this.data().id;
    return id ? { id } : null;
  });
}
