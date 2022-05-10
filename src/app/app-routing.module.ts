import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseStatusesComponent } from './course-statuses/course-statuses.component';
import { EnrollClassComponent } from './enroll-class/enroll-class.component';
import { HomeComponent } from './home/home.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageSemesterComponent } from './manage-semester/manage-semester.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { ViewGradesComponent } from './view-grades/view-grades.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'managecourse', component: ManageCoursesComponent },
  { path: 'manageclasses', component: ManageClassesComponent },
  { path: 'managesemester', component: ManageSemesterComponent },
  { path: 'managestudents', component: ManageStudentsComponent },

  { path: 'viewclass', component: ViewClassComponent },

  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'enrollclass', component: EnrollClassComponent },
  { path: 'coursestatuses', component: CourseStatusesComponent },
  { path: 'viewgrades', component: ViewGradesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
