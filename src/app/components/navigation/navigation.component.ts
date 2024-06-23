import { Component, Input, WritableSignal, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../shared/types/content/navigation';
import { Image } from '../../shared/types/content/contentPage';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() logo!: Image | undefined;
  @Input() navigation: NavigationItem[] = [];
  @Input() isMobile: boolean = false;

  isOpen: WritableSignal<boolean> = signal(false);
  animationClass = 'left-full';

  onOpen() {
    this.isOpen.set(true);

    setTimeout(() => {
      this.animationClass = 'left-none';
    }, 100);
  }

  onClose() {
    this.animationClass = 'left-full';

    setTimeout(() => {
      this.isOpen.set(false);
    }, 100);
  }
}
