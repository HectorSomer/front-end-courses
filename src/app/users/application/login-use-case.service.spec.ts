import { TestBed } from '@angular/core/testing';

import { LoginUseCaseService } from './login-use-case.service';

describe('LoginUseCaseService', () => {
  let service: LoginUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
