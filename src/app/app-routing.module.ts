import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CourseStatusesComponent } from './course-statuses/course-statuses.component';
import { EnrollClassComponent } from './enroll-class/enroll-class.component';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageSemesterComponent } from './manage-semester/manage-semester.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { ViewGradesComponent } from './view-grades/view-grades.component';

const routes: Routes = [
  {path:'', redirectTo: 'studenthome', pathMatch: 'full'},
  
  {path:'adminhome', component:AdminHomeComponent},
  {path:'managecourse', component:ManageCoursesComponent},
  {path:'manageclasses', component:ManageClassesComponent},
  {path:'managesemester', component:ManageSemesterComponent},
  {path:'managestudents', component:ManageStudentsComponent},

  {path:'instructorhome', component:InstructorHomeComponent},
  {path:'viewclass', component:ViewClassComponent},

  {path:'studenthome', component:StudentHomeComponent},
  {path:'enrollclass', component:EnrollClassComponent},
  {path:'coursestatuses', component:CourseStatusesComponent},
  {path:'viewgrades', component:ViewGradesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
