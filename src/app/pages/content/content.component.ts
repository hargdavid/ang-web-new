import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';
import { NavigationEnd, Router } from '@angular/router';
import {
  ContentPage,
  ContentPageDTO,
} from '../../shared/types/content/contentPage';
import { ContentProviderComponent } from '../../components/content-provider/content-provider.component';
import { mapContentPage } from '../../shared/helpers/mappers/mapContentPage';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentProviderComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  private readonly contentService: ContentService = inject(ContentService);
  private readonly router: Router = inject(Router);

  content: WritableSignal<ContentPage | null> = signal(null);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.fetchData();
      }
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const path = this.router.url.split('/')[1];
    this.contentService.getContentPage(path).subscribe({
      next: (response) => {
        const contentDTO = response.result[0] as ContentPageDTO;

        this.content.set(mapContentPage(contentDTO));
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
