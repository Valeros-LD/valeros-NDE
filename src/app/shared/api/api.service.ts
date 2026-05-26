import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { buildHttpParams } from './http-params.util';
import { MockDataService } from './mock-data.service';
import { SearchQuery } from '../../features/search/types/search-query';
import { SearchResponse } from '../../features/search/types/search-response';
import { NodeModel } from '../node/types/node.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly mockDataService = inject(MockDataService);
  readonly apiBaseUrl = 'https://datalaag.valeros.nl/v1';

  search(query: SearchQuery): Observable<SearchResponse> {
    const { page, ...queryParams } = query;
    const params = buildHttpParams(queryParams);
    const url = `${this.apiBaseUrl}/heritage-objects/page/${page}`;

    // TODO: Remove mock data enrichment when API is ready
    return this.http
      .get<SearchResponse>(url, { params })
      .pipe(
        map((response: SearchResponse) =>
          this.mockDataService.enrichSearchResponseWithMockData(response),
        ),
      );
  }

  autocomplete(query: SearchQuery): Observable<SearchResponse> {
    const { page, ...queryParams } = query;
    const params = buildHttpParams({ ...queryParams });
    const url = `${this.apiBaseUrl}/terms/page/${page}`;

    return this.http.get<SearchResponse>(url, { params });
  }

  details(id: string): Observable<NodeModel> {
    const extractedId = id.split('/').pop() || id;
    let observable: Observable<NodeModel>;

    const apiResources = [
      'heritage-objects',
      'terms',
      'places',
      'organizations',
      'persons',
      'licenses',
      'datasets',
    ];

    for (const resource of apiResources) {
      if (id.includes(`v1/${resource}/`)) {
        const url = `${this.apiBaseUrl}/${resource}/${extractedId}`;
        observable = this.http.get<NodeModel>(url);
        return observable.pipe(
          // TODO: Remove mock data enrichment when API is ready
          map((node) => this.mockDataService.enrichNodeWithMockData(node)),
        );
      }
    }

    // TODO: Remove mock data when API endpoints are ready
    if (id.includes('v1/occupations/')) {
      observable = this.mockDataService.occupationDetails(id);
    } else if (id.includes('v1/media-objects/')) {
      observable = this.mockDataService.mediaObjectDetails(id);
    } else {
      throw new Error(`Unsupported resource type for ID: ${id}`);
    }

    return observable.pipe(
      map((node) => this.mockDataService.enrichNodeWithMockData(node)),
    );
  }
}
