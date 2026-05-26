import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { normalizeToFirst } from '../../data-utils/value-normalization.util';
import { NodeModel } from '../types/node.model';
import { NodeLinkMode } from './node-link-mode';
import { NodeLinkService } from './node-link.service';
import { NodeImageResolverService } from '../node-image-resolver.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherExternalLink } from '@ng-icons/feather-icons';
import { TooltipBadge } from '../../tooltip-badge/tooltip-badge';
import { addUriPrefix } from '../../../config/details-page-uri-prefix.config';

@Component({
  selector: 'app-node-link',
  imports: [RouterModule, NgTemplateOutlet, NgIcon, TooltipBadge],
  templateUrl: './node-link.component.html',
  styleUrl: './node-link.component.scss',
  viewProviders: [provideIcons({ featherExternalLink })],
})
export class NodeLinkComponent {
  readonly node = input.required<NodeModel>();
  readonly showType = input<boolean>(true);
  readonly mode = input<NodeLinkMode>('inline');

  private nodeLinkService = inject(NodeLinkService);
  private imageResolver = inject(NodeImageResolverService);

  readonly isInternalLink = computed(() => {
    return this.nodeLinkService.isInternalLink(this.node());
  });

  readonly isImageCard = computed(() => {
    return this.mode() === 'image-card';
  });

  getNodeName(node: NodeModel): string {
    const name = normalizeToFirst<string>(node.name);
    if (name) return name;

    try {
      const url = new URL(node.id);
      return url.hostname;
    } catch {
      return node.id;
    }
  }

  getNodeType(node: NodeModel): string | undefined {
    return normalizeToFirst<string>(node.type);
  }

  getImageUrl(node: NodeModel): string {
    const imageUrl = this.imageResolver.getImageUrl(node);
    // TODO: Replace placeholder image
    return imageUrl || 'https://placehold.co/250x250?text=Geen+afbeelding';
  }

  protected readonly addUriPrefix = addUriPrefix;
}
