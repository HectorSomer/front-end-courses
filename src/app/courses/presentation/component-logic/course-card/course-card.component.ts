import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/entities/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  //encontré esta manera para evitar poner todo el código del contructor, el ! sirve sabemos que algún parámetro puede no tener nada
  @Input() course!: Course;
}
