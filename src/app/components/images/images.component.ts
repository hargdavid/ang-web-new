import { Component, Input } from '@angular/core';
import { ImageWithLink } from '../../shared/types/content/contentPage';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss',
})
export class ImagesComponent {
  @Input() images: ImageWithLink[] = [];
}
