import { NgTemplateOutlet } from '@angular/common';
import { Component, computed } from '@angular/core';
import { HighlightedTextComponent } from '../../../ui/highlighted-text/highlighted-text.component';
import { TruncatedTextComponent } from '../../../ui/truncated-text/truncated-text.component';
import { BaseWidget } from '../../base-widget';
import { TextWidgetOptions } from './text-widget.options';

@Component({
  selector: 'app-text-widget',

  templateUrl: './text-widget.component.html',
  imports: [NgTemplateOutlet, HighlightedTextComponent, TruncatedTextComponent],
})
export class TextWidget extends BaseWidget {
  asHeader = computed(() => {
    return (this.options() as TextWidgetOptions).asHeader === true;
  });

  largeFont = computed(() => {
    return (this.options() as TextWidgetOptions).largeFont === true;
  });

  maxLength = computed(() => {
    return (this.options() as TextWidgetOptions).maxLength;
  });

  enableHighlights = computed(() => {
    return (this.options() as TextWidgetOptions).enableHighlights === true;
  });
}
