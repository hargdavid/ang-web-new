import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentService } from './shared/services/content.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly contentService: ContentService = inject(ContentService);

  constructor() {
    this.contentService.getNavigation();
  }
}
