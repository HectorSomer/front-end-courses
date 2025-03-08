import { Injectable } from '@angular/core';
import { UserRepository } from '../domain/repositories/user_repository';

@Injectable({
  providedIn: 'root'
})
export class LoginUseCaseService {

  constructor(readonly userRepository: UserRepository) {}
  execute(email: string, password: string) {
    return this.userRepository.login(email, password);
  }
}
