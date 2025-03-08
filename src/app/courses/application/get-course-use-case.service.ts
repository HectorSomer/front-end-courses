import { Injectable } from '@angular/core';
import { CourseRepository } from '../domain/repositories/course_repository';

@Injectable({
  providedIn: 'root'
})
export class GetCourseUseCaseService {

   constructor(readonly courseRepository: CourseRepository) {}
    execute() {
      return this.courseRepository.getCourses();
    }
}
