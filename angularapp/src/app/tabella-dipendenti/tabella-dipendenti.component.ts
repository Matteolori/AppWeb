import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Dipendente } from '../Models/Dipendente';
import { DipendenteService } from '../dipendente.service';

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
        this.dipendenti = this.dipendenti.filter(d => d.id !== dipendenteId);
      },
      (error) => {
        console.error('Error deleting dipendente:', error);
      }
    );
  }
}


