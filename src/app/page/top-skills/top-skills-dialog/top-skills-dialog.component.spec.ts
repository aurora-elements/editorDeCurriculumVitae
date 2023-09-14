import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSkillsDialogComponent } from './top-skills-dialog.component';

describe('DialogComponent', () => {
  let component: TopSkillsDialogComponent;
  let fixture: ComponentFixture<TopSkillsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSkillsDialogComponent]
    });
    fixture = TestBed.createComponent(TopSkillsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
