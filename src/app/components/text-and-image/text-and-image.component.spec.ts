import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndImageComponent } from './text-and-image.component';

describe('TextAndImageComponent', () => {
  let component: TextAndImageComponent;
  let fixture: ComponentFixture<TextAndImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAndImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
