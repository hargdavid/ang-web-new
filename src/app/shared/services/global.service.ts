import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  WritableSignal,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  isMobile: WritableSignal<boolean> = signal(true);
  width: any;
  height: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile.set(window.innerWidth < 768);

      window.addEventListener('resize', () => {
        this.isMobile.set(window.innerWidth < 768);
      });

      window.removeEventListener('resize', () => {
        this.isMobile.set(window.innerWidth < 768);
      });
    } else {
      this.isMobile.set(false);
    }
  }
}
