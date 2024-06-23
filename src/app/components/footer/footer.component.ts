import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../shared/types/content/navigation';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() links: NavigationItem[] = [];
}
