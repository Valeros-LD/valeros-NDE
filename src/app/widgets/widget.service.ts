import { Injectable } from '@angular/core';
import { NodePresentationConfig } from './core/types/node-presentation-config';
import {
  WidgetsByPosition,
  WidgetWithProperty,
} from './core/types/widgets-by-position';

@Injectable({ providedIn: 'root' })
export class WidgetService {
  getWidgetsByPosition(
    properties: string[],
    presentationConfig: NodePresentationConfig,
  ): WidgetsByPosition {
    const { displayedWidgetIds } = presentationConfig;

    const widgetsWithProperties: WidgetWithProperty[] =
      this.matchPropertiesToWidgets(properties, presentationConfig);

    const orderedWidgets: WidgetWithProperty[] = this.filterAndOrderWidgets(
      widgetsWithProperties,
      displayedWidgetIds,
    );

    return this.groupByPosition(orderedWidgets);
  }

  private matchPropertiesToWidgets(
    properties: string[],
    presentationConfig: NodePresentationConfig,
  ): WidgetWithProperty[] {
    const widgetsWithProperties: WidgetWithProperty[] = [];
    properties.forEach((property) => {
      let widgetsForProperty = presentationConfig.widgets.filter((w) =>
        w.properties.includes(property),
      );

      if (widgetsForProperty.length === 0) {
        widgetsForProperty = [presentationConfig.fallbackWidget];
      }

      widgetsForProperty.forEach((widget) => {
        widgetsWithProperties.push({ property, widget });
      });
    });

    return widgetsWithProperties;
  }

  private filterAndOrderWidgets(
    widgetsWithProperties: WidgetWithProperty[],
    displayedWidgetIds: string[],
  ): WidgetWithProperty[] {
    const widgetMap = new Map<string, WidgetWithProperty[]>();
    widgetsWithProperties.forEach((widgetWithProperty) => {
      const id = widgetWithProperty.widget.id || '';
      if (!widgetMap.has(id)) {
        widgetMap.set(id, []);
      }
      widgetMap.get(id)!.push(widgetWithProperty);
    });

    const displayedWidgets: WidgetWithProperty[] = [];

    const noDisplayOrderSpecified =
      !displayedWidgetIds || displayedWidgetIds.length === 0;
    if (noDisplayOrderSpecified) {
      // No order specified, sort alphabetically by property
      displayedWidgets.push(
        ...widgetsWithProperties.sort((a, b) =>
          a.property.localeCompare(b.property),
        ),
      );
    } else {
      const explicitlyOrderedIds = new Set(
        displayedWidgetIds.filter((id) => id !== '*'),
      );

      displayedWidgetIds.forEach((widgetId) => {
        if (widgetId === '*') {
          const widgetsNotExplicitlyOrdered = Array.from(widgetMap.entries())
            .filter(([id]) => !explicitlyOrderedIds.has(id) || id === '')
            .flatMap(([, items]) => items)
            .sort((a, b) => a.property.localeCompare(b.property));
          displayedWidgets.push(...widgetsNotExplicitlyOrdered);
        } else if (widgetMap.has(widgetId)) {
          displayedWidgets.push(...widgetMap.get(widgetId)!);
        }
      });
    }

    return displayedWidgets;
  }

  private groupByPosition(
    orderedWidgets: WidgetWithProperty[],
  ): WidgetsByPosition {
    const byPosition: WidgetsByPosition = {
      top: [],
      left: [],
      main: [],
      right: [],
      bottom: [],
    };

    orderedWidgets.forEach(({ property, widget }) => {
      const position = widget.options?.position || 'main';
      byPosition[position].push({ property, widget });
    });

    return byPosition;
  }
}
