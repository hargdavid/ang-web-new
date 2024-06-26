import { Component, Input } from '@angular/core';
import { ContentPage, TextTypes } from '../../shared/types/content/contentPage';
import { HeroComponent } from '../hero/hero.component';
import { ContentComponent } from '../content/content.component';
import { TextAndImageComponent } from '../text-and-image/text-and-image.component';
import { BlocksComponent } from '../blocks/blocks.component';

@Component({
  selector: 'app-content-provider',
  standalone: true,
  imports: [
    HeroComponent,
    ContentComponent,
    TextAndImageComponent,
    BlocksComponent,
  ],
  templateUrl: './content-provider.component.html',
  styleUrl: './content-provider.component.scss',
})
export class ContentProviderComponent {
  @Input() content: ContentPage | null = null;

  TextTypes = TextTypes;
}
