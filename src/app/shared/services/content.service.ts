import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { MetaData, NavigationItem } from '../types/content/navigation';
import { mapMetaData } from '../helpers/mappers/mapMetaData';
import { mapNavigation } from '../helpers/mappers/mapNavigation';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = `https://${environment.cmsId}.api.sanity.io/v1/data/query/production?query=`;

  navigation: WritableSignal<NavigationItem[]> = signal([]);
  meta: WritableSignal<MetaData | null> = signal(null);

  getNavigation() {
    const query = encodeURIComponent("*[_type == 'navLinks']");
    this.httpClient.get<any>(`${this.baseUrl}${query}`).subscribe({
      next: (response) => {
        this.navigation.set(mapNavigation(response.result[0].links));
        this.meta.set(mapMetaData(response.result[0].meta));
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getStartPage() {
    const query = encodeURIComponent("*[_type == 'startPage']");

    return this.httpClient.get<any>(`${this.baseUrl}${query}`);
  }

  getContentPage(pathname: string) {
    const query = decodeURIComponent(
      `*[_type == 'contentPage'][path == '${pathname}']`
    );

    return this.httpClient.get<any>(`${this.baseUrl}${query}`);
  }
}
