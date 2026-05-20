import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IiifUrlTransformerService {
  transformManifestUrl(originalUrl: string): string {
    if (isDevMode()) {
      // TODO: Replace with Angular proxy for development
      return `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`;
    }

    try {
      const encodedUrl = encodeURIComponent(originalUrl);
      return `/iiif-proxy?url=${encodedUrl}`;
    } catch (error) {
      console.error('Invalid manifest URL:', originalUrl);
      return originalUrl;
    }
  }
}
