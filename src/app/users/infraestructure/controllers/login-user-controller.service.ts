import { Injectable } from '@angular/core';
import { LoginUseCaseService } from '../../application/login-use-case.service';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../domain/entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserControllerService {

  constructor(readonly useCase: LoginUseCaseService) { }

  login(email: string, password: string): Observable<User> {
      return this.useCase.execute(email, password).pipe(
        catchError(error => {
          return throwError(() => error);
        })
      );
  }
}
