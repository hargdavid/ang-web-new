import { Component, Input } from '@angular/core';
import { Hero, Image, Video } from '../../shared/types/content/contentPage';
import { LinkButton } from '../../shared/types/content/linkButton';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle: string | null = null;
  @Input() heroImage: Image | null = null;
  @Input() button: LinkButton | null = null;
  @Input() video: Video | null = null;
  @Input() mobileImage: Image | null = null;

  bgUrl: string = 'background-image:url(' + this.heroImage + ');';

  ngOnInit() {
    this.bgUrl = 'background-image:url(' + this.heroImage + ');';
  }

  //url = !isDesktop && mobileImage?.url ? mobileImage?.url : heroImage.url;
}
