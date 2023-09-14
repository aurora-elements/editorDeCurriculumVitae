import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableOverlayComponent } from './clickable-overlay.component';

describe('ClickableOverlayComponent', () => {
  let component: ClickableOverlayComponent;
  let fixture: ComponentFixture<ClickableOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickableOverlayComponent]
    });
    fixture = TestBed.createComponent(ClickableOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
