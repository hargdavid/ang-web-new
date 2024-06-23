import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentService } from './shared/services/content.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GlobalService } from './shared/services/global.service';
import { ContentProviderComponent } from './components/content-provider/content-provider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly contentService: ContentService = inject(ContentService);
  readonly globalService: GlobalService = inject(GlobalService);

  constructor() {
    this.contentService.getNavigation();
  }
}
