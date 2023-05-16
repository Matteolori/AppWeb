import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaDipendentiComponent } from './tabella-dipendenti.component';

describe('TabellaDipendentiComponent', () => {
  let component: TabellaDipendentiComponent;
  let fixture: ComponentFixture<TabellaDipendentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabellaDipendentiComponent]
    });
    fixture = TestBed.createComponent(TabellaDipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
