import { TestBed } from '@angular/core/testing';
import { GetCourseControllerService } from './get-course-controller.service';


describe('GetCourseControllerService', () => {
  let service: GetCourseControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCourseControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
