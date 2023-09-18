import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDialogComponent } from './about-me-dialog.component';

describe('AboutMeDialogComponent', () => {
  let component: AboutMeDialogComponent;
  let fixture: ComponentFixture<AboutMeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeDialogComponent]
    });
    fixture = TestBed.createComponent(AboutMeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
