import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Dipendente } from '../Models/Dipendente';

@Injectable({
  providedIn: 'root'
})
export class DipendenteService {
  public dipendentiSubject: BehaviorSubject<Dipendente[]> = new BehaviorSubject<Dipendente[]>([]);
  public dipendenti$: Observable<Dipendente[]> = this.dipendentiSubject.asObservable();
  private apiUrl = '/dipendente';

  constructor(private http: HttpClient) { }

  // Retrieve all dipendenti
  getAllDipendenti(): void {
    this.http.get<Dipendente[]>(this.apiUrl).subscribe(
      (dipendenti) => {
        this.dipendentiSubject.next(dipendenti);
      },
      (error) => {
        console.error('Error retrieving dipendenti:', error);
      }
    );
  }
  // Retrieve all dipendenti
  getAllDipendenti2():Observable<Dipendente[]>  {
   return  this.http.get<Dipendente[]>(this.apiUrl)
    
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
      map((res: any) => {
        console.log('res',res);
        this.addDipendenteToSubject(res);
        return res;
      }),
      catchError(this.handleError)
    );
  }

  // Update an existing dipendente
  updateDipendente(dipendente: Dipendente): Observable<void> {
    console.log(dipendente)
    const url = `${this.apiUrl}/${dipendente.id}`;
    return this.http.put<void>(url, dipendente).pipe(
      map((res: any) => {
        //this.addDipendenteToSubject(dipendente)
        return res;
      }),
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

  addDipendenteToSubject(dipendente: Dipendente): void {
    const currentDipendenti = this.dipendentiSubject.getValue();
    const updatedDipendenti = [...currentDipendenti, dipendente];
    this.dipendentiSubject.next(updatedDipendenti);
  }

  subscribeToDipendenti(): void {
    this.dipendenti$.subscribe(
      (dipendenti) => {
        // Handle the emitted dipendenti array here
        console.log('Dipendenti:', dipendenti);
      },
      (error) => {
        console.error('Error retrieving dipendenti:', error);
      }
    );
  }
}


