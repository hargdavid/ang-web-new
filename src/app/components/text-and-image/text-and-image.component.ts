import { Component, Input } from '@angular/core';
import { ImageWithText } from '../../shared/types/content/contentPage';

@Component({
  selector: 'app-text-and-image',
  standalone: true,
  imports: [],
  templateUrl: './text-and-image.component.html',
  styleUrl: './text-and-image.component.scss',
})
export class TextAndImageComponent {
  @Input() imageWithText!: ImageWithText;
}
