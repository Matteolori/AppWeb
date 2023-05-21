import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dipendente } from '../Models/Dipendente';

@Component({
  selector: 'dipendente-details',
  templateUrl: './dipendente-details.component.html',
  styleUrls: ['./dipendente-details.component.css']
})
export class DipendenteDetailsComponent {
  @Input() dipendente: Dipendente = {
    id: 0,
    nome: '',
    cognome: ''
  };
  @Output() saveDipendente: EventEmitter<Dipendente> = new EventEmitter<Dipendente>();
  

  dipendenteForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.dipendenteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.dipendenteForm.patchValue({
      nome: this.dipendente.nome,
      cognome: this.dipendente.cognome
    });
  }

  ngOnChanges(): void {
    if (this.dipendente) {
      this.dipendenteForm.patchValue({
        nome: this.dipendente.nome,
        cognome: this.dipendente.cognome
      });
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  onSubmit(): void {
    if (this.dipendenteForm.valid) {
      const updatedDipendente: Dipendente = {
        ...this.dipendente,
        nome: this.dipendenteForm.value.nome,
        cognome: this.dipendenteForm.value.cognome
      };
      this.saveDipendente.emit(updatedDipendente);
      this.isEditMode = false;
    }
  }
}
