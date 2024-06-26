import { Component, Input } from '@angular/core';
import {
  ContentBlock,
  TextTypes,
} from '../../shared/types/content/contentPage';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() content: ContentBlock[] = [];

  TextTypes = TextTypes;
}
