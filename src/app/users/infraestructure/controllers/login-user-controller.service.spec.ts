import { TestBed } from '@angular/core/testing';
import { LoginUserControllerService } from './login-user-controller.service';


describe('LoginUserControllerService', () => {
  let service: LoginUserControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
