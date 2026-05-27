import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherExternalLink } from '@ng-icons/feather-icons';
import { normalizeToFirst } from '../../data-utils/value-normalization.util';
import { addUriPrefix } from '../../routing/details-page-uri-prefix';
import { ImageWithSkeletonComponent } from '../../ui/image/image-with-skeleton/image-with-skeleton.component';
import { NodeImageResolverService } from '../node-image-resolver.service';
import { NodeModel } from '../types/node.model';
import { NodeLinkVariant } from './node-link-variant';
import { NodeLinkService } from './node-link.service';

@Component({
  selector: 'app-node-link',
  imports: [RouterModule, NgTemplateOutlet, NgIcon, ImageWithSkeletonComponent],
  templateUrl: './node-link.component.html',
  styleUrl: './node-link.component.scss',
  viewProviders: [provideIcons({ featherExternalLink })],
})
export class NodeLinkComponent {
  readonly node = input.required<NodeModel>();
  readonly showType = input<boolean>(true);
  readonly variant = input<NodeLinkVariant>('inline');

  private nodeLinkService = inject(NodeLinkService);
  private imageResolver = inject(NodeImageResolverService);

  readonly isInternalLink = computed(() => {
    return this.nodeLinkService.isInternalLink(this.node());
  });

  readonly isImageCard = computed(() => {
    return this.variant() === 'image-card';
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
    return imageUrl || '/image-loading-failed.svg';
  }

  protected readonly addUriPrefix = addUriPrefix;
}
