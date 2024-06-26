import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';
import {
  ContentPage,
  ContentPageDTO,
} from '../../shared/types/content/contentPage';
import { ContentProviderComponent } from '../../components/content-provider/content-provider.component';
import { mapContentPage } from '../../shared/helpers/mappers/mapContentPage';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentProviderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly contentService: ContentService = inject(ContentService);

  content: WritableSignal<ContentPage | null> = signal(null);

  ngOnInit() {
    this.contentService.getStartPage().subscribe({
      next: (response) => {
        const startPageDTO: ContentPageDTO = response.result[0];

        this.content.set(mapContentPage(startPageDTO));
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
