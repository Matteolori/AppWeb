import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteModalComponent } from './dipendente-modal.component';

describe('DipendenteModalComponent', () => {
  let component: DipendenteModalComponent;
  let fixture: ComponentFixture<DipendenteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipendenteModalComponent]
    });
    fixture = TestBed.createComponent(DipendenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
