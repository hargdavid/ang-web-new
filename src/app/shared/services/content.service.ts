import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import {
  MetaData,
  NavigationDto,
  NavigationItem,
} from '../types/content/navigation';
import { mapMetaData } from '../helpers/mappers/mapMetaData';
import { ContentPage, ContentPageDTO } from '../types/content/contentPage';
import { mapContentPage } from '../helpers/mappers/mapContentPage';
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
    let startPage: ContentPage | null = null;

    this.httpClient.get<any>(`${this.baseUrl}${query}`).subscribe({
      next: (response) => {
        const startPageDTO: ContentPageDTO = response.result[0];

        startPage = mapContentPage(startPageDTO);
      },
      error: (err) => {
        console.error(err);
      },
    });

    return startPage;
  }

  getContentPage(pathname: string) {
    const query = encodeURIComponent(
      `*[_type == 'contentPage'][path == '${pathname}']`
    );
    let contentPage: ContentPage | null = null;

    this.httpClient.get<any>(`${this.baseUrl}${query}`).subscribe({
      next: (response) => {
        const contentDTO = response.data.result[0] as ContentPageDTO;

        contentPage = mapContentPage(contentDTO);
      },
      error: (err) => {
        console.error(err);
      },
    });

    return contentPage;
  }
}
