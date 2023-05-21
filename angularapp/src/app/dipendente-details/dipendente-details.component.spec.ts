import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteDetailsComponent } from './dipendente-details.component';

describe('DipendenteDetailsComponent', () => {
  let component: DipendenteDetailsComponent;
  let fixture: ComponentFixture<DipendenteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipendenteDetailsComponent]
    });
    fixture = TestBed.createComponent(DipendenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
