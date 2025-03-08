import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseConteinerComponent } from './course-conteiner.component';

describe('CourseConteinerComponent', () => {
  let component: CourseConteinerComponent;
  let fixture: ComponentFixture<CourseConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseConteinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
