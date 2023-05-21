import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteFormComponent } from './dipendente-form.component';

describe('DipendenteFormComponent', () => {
  let component: DipendenteFormComponent;
  let fixture: ComponentFixture<DipendenteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipendenteFormComponent]
    });
    fixture = TestBed.createComponent(DipendenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
