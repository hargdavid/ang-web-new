import { Component, inject } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  private readonly contentService: ContentService = inject(ContentService);

  constructor() {
    this.contentService.getContentPage('om-oss');
  }
}
