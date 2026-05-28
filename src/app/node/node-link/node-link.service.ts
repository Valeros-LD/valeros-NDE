import { inject, Injectable } from '@angular/core';
import { ConfigService } from '../../config/config-page/config.service';
import { NodeModel } from '../types/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeLinkService {
  private configService = inject(ConfigService);

  isInternalLink(node: NodeModel): boolean {
    return node.id.startsWith(this.configService.apiBaseUrl());
  }
}
