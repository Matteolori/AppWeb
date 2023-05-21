import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DipendenteService } from '../services/dipendente.service';
import { Dipendente } from '../Models/Dipendente';

@Component({
  selector: 'dipendente-dialog',
  templateUrl: './dipendente-dialog.component.html',
  styleUrls: ['./dipendente-dialog.component.css']
})
export class DipendenteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DipendenteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dipendenteService: DipendenteService
  ) { }

  onFormSubmitted(formData: Dipendente) {
    this.dipendenteService.createDipendente(formData).subscribe(
      (response) => {
        console.log('Dipendente added successfully:', response);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error adding Dipendente:', error);
      }
    );
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
