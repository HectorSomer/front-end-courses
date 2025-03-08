import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Course } from '../../domain/entities/course';
import { CourseRepository } from '../../domain/repositories/course_repository';

@Injectable({
  providedIn: 'root'
})
export class ApiRepositoryService implements CourseRepository{
private url = 'http://localhost:8080/v1/courses/';

  constructor(readonly http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<{ data: Course[] }>(this.url).pipe(
      map(response => response.data), 
      catchError((error) => {
        console.error('Error al traer datos:', error);
        return throwError(() => new Error('Error al traer datos.'));
      })
    );
  }
}
