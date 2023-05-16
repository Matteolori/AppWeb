import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dipendente } from '../Models/Dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnInit {
  public dipendenti: Dipendente[] = [];

  constructor(private dipendenteService: DipendenteService) { }

  ngOnInit() {
    this.loadDipendenti();
  }

  loadDipendenti() {
    this.dipendenteService.getAllDipendenti().subscribe(
      (dipendenti) => {
        this.dipendenti = dipendenti;
      },
      (error) => {
        console.error('Error retrieving dipendenti:', error);
      }
    );
  }
}
