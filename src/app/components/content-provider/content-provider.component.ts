import { Component, Input } from '@angular/core';
import {
  ContentBlockObject,
  TextTypes,
} from '../../shared/types/content/contentPage';

@Component({
  selector: 'app-content-provider',
  standalone: true,
  imports: [],
  templateUrl: './content-provider.component.html',
  styleUrl: './content-provider.component.scss',
})
export class ContentProviderComponent {
  @Input() contentBlocks: ContentBlockObject[] = [];

  TextTypes = TextTypes;
}
