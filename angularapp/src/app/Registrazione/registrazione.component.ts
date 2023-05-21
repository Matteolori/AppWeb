import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
})
export class RegistrazioneComponent {
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private authService: AuthenticationService, private router: Router) { }

  signup(): void {
    this.authService.registrazione(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.token);
        this.router.navigate(['/dashboard']); 
      },
      (error) => {
        this.error = error.error;
      }
    );
  }
}
