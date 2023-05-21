import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dipendente-form',
  templateUrl: './dipendente-form.component.html',
  styleUrls: ['./dipendente-form.component.css']
})
export class DipendenteFormComponent {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  dipendenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dipendenteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.dipendenteForm.valid) {
      const formData = {
        nome: this.dipendenteForm.value.nome,
        cognome: this.dipendenteForm.value.cognome
      };

      this.formSubmitted.emit(formData);
    }
  }
}
