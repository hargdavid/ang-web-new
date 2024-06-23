import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  isMobile: WritableSignal<boolean> = signal(true);

  ngOnInit() {
    /* if (window) {
      window.addEventListener('resize', () => {
        this.isMobile.set(window.innerWidth > 798);
      });

      window.removeEventListener('resize', () => {
        this.isMobile.set(window.innerWidth > 798);
      });
    } */
  }
}
