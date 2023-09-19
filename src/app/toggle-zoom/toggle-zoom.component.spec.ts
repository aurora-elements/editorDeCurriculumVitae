import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleZoomComponent } from './toggle-zoom.component';

describe('ToggleZoomComponent', () => {
  let component: ToggleZoomComponent;
  let fixture: ComponentFixture<ToggleZoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleZoomComponent]
    });
    fixture = TestBed.createComponent(ToggleZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
