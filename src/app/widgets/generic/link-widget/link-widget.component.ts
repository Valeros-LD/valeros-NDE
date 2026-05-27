import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { NodeLinkListComponent } from '../../../node/node-link-list/node-link-list.component';
import { isNodeModel, NodeModel } from '../../../node/types/node.model';
import { BaseWidget } from '../../base-widget';
import { TextWidget } from '../text-widget/text-widget.component';
import { TextWidgetConfig } from '../text-widget/text-widget.config';

@Component({
  selector: 'app-link-widget',
  imports: [CommonModule, TextWidget, NodeLinkListComponent],
  templateUrl: './link-widget.component.html',
})
export class LinkWidget extends BaseWidget {
  nodeValues = computed(() => {
    return this.values().filter((value) => isNodeModel(value));
  });

  literalValues = computed(() => {
    return this.values().filter((value) => !isNodeModel(value));
  });

  nodeWithLiteralValues = computed<NodeModel>(() => ({
    id: 'literal-values',
    literals: this.literalValues(),
  }));

  typedConfig = computed(() => this.config() as TextWidgetConfig);

  textConfig = computed(() => ({
    showPropertyLabel: false,
    asHeader: this.typedConfig().asHeader,
    largeFont: this.typedConfig().largeFont,
    maxLength: this.typedConfig().maxLength,
    enableHighlights: this.typedConfig().enableHighlights,
  }));
}
