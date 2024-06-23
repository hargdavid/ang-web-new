import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';
import { ContentPage } from '../../shared/types/content/contentPage';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContentProviderComponent } from '../../components/content-provider/content-provider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ContentProviderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly contentService: ContentService = inject(ContentService);

  content: WritableSignal<ContentPage | null> = signal(null);

  constructor() {
    this.content.set(this.contentService.getStartPage());
  }
}
