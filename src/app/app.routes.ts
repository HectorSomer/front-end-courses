import { Routes } from '@angular/router';
import { HomeComponent } from './presentation-main/home/home.component';
import { CoursePageComponent } from './courses/presentation/component-visual/course-page/course-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'courses', component: CoursePageComponent}
];
