import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserRepository } from './users/domain/repositories/user_repository';
import { ApiRepositoryService } from './users/infraestructure/api-repositories/api-repository.service';
import { CourseRepository } from './courses/domain/repositories/course_repository';
import { ApiRepositoryService as CourseApiService} from './courses/infraestructure/api-repositories/api-repository.service' ;
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(),    { provide: UserRepository, useClass: ApiRepositoryService },
    { provide: CourseRepository, useClass: CourseApiService}]
};
