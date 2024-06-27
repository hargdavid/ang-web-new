import { Component, Input } from '@angular/core';
import { ImageWithLink } from '../../shared/types/content/contentPage';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss',
})
export class BlocksComponent {
  @Input() blocks: ImageWithLink[] = [];
}
