import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageComponent } from './sub-page.component';

describe('SubPageComponent', () => {
  let component: SubPageComponent;
  let fixture: ComponentFixture<SubPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubPageComponent]
    });
    fixture = TestBed.createComponent(SubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
