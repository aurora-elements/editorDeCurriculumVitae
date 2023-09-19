import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFullscreenComponent } from './toggle-fullscreen.component';

describe('ToggleFullscreenComponent', () => {
  let component: ToggleFullscreenComponent;
  let fixture: ComponentFixture<ToggleFullscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleFullscreenComponent]
    });
    fixture = TestBed.createComponent(ToggleFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
