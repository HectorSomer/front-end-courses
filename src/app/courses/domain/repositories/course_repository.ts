import { Observable } from "rxjs";
import { Course } from "../entities/course";
export abstract class  CourseRepository {
     abstract getCourses(): Observable<Course[]>;
}
