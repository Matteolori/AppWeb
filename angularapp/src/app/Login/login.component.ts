import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.token);
        this.router.navigate(['/dashboard']); // Redirect to dashboard or any other desired page
      },
      (error) => {
        this.error = error.error;
      }
    );
  }
}
