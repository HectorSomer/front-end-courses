import { Component } from '@angular/core';
import { CourseConteinerComponent } from '../../component-logic/course-conteiner/course-conteiner.component';
@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CourseConteinerComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

}
