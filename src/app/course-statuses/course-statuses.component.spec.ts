import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatusesComponent } from './course-statuses.component';

describe('CourseStatusesComponent', () => {
  let component: CourseStatusesComponent;
  let fixture: ComponentFixture<CourseStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
