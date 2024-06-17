import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProviderComponent } from './content-provider.component';

describe('ContentProviderComponent', () => {
  let component: ContentProviderComponent;
  let fixture: ComponentFixture<ContentProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
