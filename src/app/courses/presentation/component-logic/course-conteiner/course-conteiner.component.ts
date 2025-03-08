import { Component } from '@angular/core';
import { Course } from '../../../domain/entities/course';
import { GetCourseControllerService } from '../../../infraestructure/controllers/get-course-controller.service';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-course-conteiner',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-conteiner.component.html',
  styleUrl: './course-conteiner.component.css'
})
export class CourseConteinerComponent {
  courses: Course[] = [];

  constructor(private getCourseController: GetCourseControllerService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.getCourseController.getCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error al cargar los cursos:', error);
      }
    );
  }
}
