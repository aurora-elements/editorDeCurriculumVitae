import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionsComponent } from './certificacions.component';

describe('CertificacionsComponent', () => {
  let component: CertificacionsComponent;
  let fixture: ComponentFixture<CertificacionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificacionsComponent]
    });
    fixture = TestBed.createComponent(CertificacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
