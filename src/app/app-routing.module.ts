import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  // homepage
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // student routes
  { path: 'schedule', component: ScheduleComponent },
  { path: 'enrollclass', component: EnrollClassComponent },
  { path: 'viewgrades', component: ViewGradesComponent },

  // instructor routes
  // `managestudents` is also an admin route
  { path: 'managestudents', component: ManageStudentsComponent },
  { path: 'viewclass', component: ViewClassComponent },

  // admin routes
  { path: 'managecourse', component: ManageCoursesComponent },
  { path: 'manageclasses', component: ManageClassesComponent },
  { path: 'managesemester', component: ManageSemesterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
