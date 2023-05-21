import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = '/authentication';

  constructor(private http: HttpClient, private router: Router) { }

  registrazione(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrazione`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
  logout() {

        this.clearToken(); // Call the clearToken method on successful logout
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('access_token');
  }

  private clearToken() {
    localStorage.removeItem('access_token'); // Remove the token from local storage
  }
}
