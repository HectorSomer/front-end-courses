import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/repositories/user_repository';

@Injectable({
  providedIn: 'root'
})
export class ApiRepositoryService implements UserRepository{
  private url = 'https://localhost:8080/v1/users';
  constructor(readonly http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<{ posts: User }>(this.url, { email, password }).pipe(
      map(response => response.posts), 
      catchError((error) => {
        console.error('Error en el login:', error);
        return throwError(() => new Error('Error en la autenticación. Inténtalo nuevamente.'));
      })
    );
  }
}
