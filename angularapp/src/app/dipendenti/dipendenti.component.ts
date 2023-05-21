import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dipendente } from '../Models/Dipendente';
import { DipendenteService } from '../services/dipendente.service';
import { MatDialog } from '@angular/material/dialog';
import { DipendenteDialogComponent } from '../dipendente-dialog/dipendente-dialog.component';

@Component({
  selector: 'dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnInit {
  public dipendenti: Dipendente[] = [];

  public data: Dipendente[] = [];

  constructor(private dipendenteService: DipendenteService, private dialog: MatDialog) { }

  ngOnInit() {
    //this.LoadData();

    this.dipendenteService.getAllDipendenti();
    this.dipendenteService.subscribeToDipendenti();
    this.dipendenteService.dipendenti$.subscribe(
      (dipendenti) => {
        this.dipendenti = dipendenti;
        console.log(dipendenti);
      }
    );
  }

  private LoadData() {
    this.dipendenteService.getAllDipendenti2().subscribe((r: Dipendente[]) => {
      this.dipendenti = r
      console.log(JSON.stringify(r, null, 4))
    });
  }


  onEmitUpdate(event: any) {

    this.LoadData();
  }


  openModal() {
    const dialogRef = this.dialog.open(DipendenteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result after the dialog is closed
      console.log('Dialog result:', result);
    });
  }

  closeModal() {
    // Close the modal if needed
  }
}

