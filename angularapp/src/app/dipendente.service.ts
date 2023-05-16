import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Dipendente } from './Models/Dipendente';

@Injectable({
  providedIn: 'root'
})
export class DipendenteService {
  private apiUrl = '/dipendente';

  constructor(private http: HttpClient) { }

  // Retrieve all dipendenti
  getAllDipendenti(): Observable<Dipendente[]> {
    return this.http.get<Dipendente[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Retrieve a dipendente by ID
  getDipendenteById(id: number): Observable<Dipendente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Dipendente>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new dipendente
  createDipendente(dipendente: Dipendente): Observable<number> {
    return this.http.post<Dipendente>(this.apiUrl, dipendente).pipe(
      map(response => response.id),
      catchError(this.handleError)
    );
  }

  // Update an existing dipendente
  updateDipendente(dipendente: Dipendente): Observable<void> {
    const url = `${this.apiUrl}/${dipendente.id}`;
    return this.http.put<void>(url, dipendente).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a dipendente by ID
  deleteDipendente(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API error:', error);
    return throwError('Something went wrong.');
  }
}
