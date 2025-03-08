import { Injectable } from '@angular/core';
import { GetCourseUseCaseService } from '../../application/get-course-use-case.service';
import { Course } from '../../domain/entities/course';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCourseControllerService {

  constructor(readonly useCase: GetCourseUseCaseService) { }
 
   getCourses(): Observable<Course[]> {
       return this.useCase.execute().pipe(
         catchError(error => {
           return throwError(() => error);
         })
       );
   }
}
