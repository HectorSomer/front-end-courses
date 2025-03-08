import { TestBed } from '@angular/core/testing';
import { GetCourseUseCaseService } from './get-course-use-case.service';


describe('GetCourseUseCaseService', () => {
  let service: GetCourseUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCourseUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
