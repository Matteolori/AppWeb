import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Dipendente } from '../Models/Dipendente';
import { DipendenteService } from '../services/dipendente.service';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'tabella-dipendenti',
  styleUrls: ['tabella-dipendenti.component.css'],
  templateUrl: 'tabella-dipendenti.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TabellaDipendentiComponent {
  @Input() public dipendenti: Dipendente[] = [];
  @Output() public emitDipendente: EventEmitter<boolean> = new EventEmitter<boolean>();
  dataSource = this.dipendenti;
  columnsToDisplay = ['nome', 'cognome'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedDipendente: Dipendente | null | undefined;
  constructor(private dipendenteService: DipendenteService) { }
  ngOnChanges() {
    console.log(this.dipendenti)
  }

  deleteDipendente(dipendenteId: number) {
    this.dipendenteService.deleteDipendente(dipendenteId).subscribe(
      () => {
        this.dipendenteService.getAllDipendenti()

        this.dipendenti = this.dipendenti.filter(d => d.id !== dipendenteId);
      },
      (error) => {
        console.error('Error deleting dipendente:', error);
      }
    );
  }

  updatedDipendente(updatedDipendente: Dipendente) {
    console.log(updatedDipendente);
    this.dipendenteService.updateDipendente(updatedDipendente).subscribe(
      (response) => {
        this.dipendenteService.getAllDipendenti()
        this.emitDipendente.emit(true);
        console.log('Dipendente added successfully:', response);
      },
      (error) => {
        console.error('Error adding Dipendente:', error);
      }
    );
  }
}


