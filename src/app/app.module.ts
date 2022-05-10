import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ManageSemesterComponent } from './manage-semester/manage-semester.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { EnrollClassComponent } from './enroll-class/enroll-class.component';
import { ViewGradesComponent } from './view-grades/view-grades.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleBarComponent,
    ActionButtonComponent,
    ManageCoursesComponent,
    ManageClassesComponent,
    ManageSemesterComponent,
    ManageStudentsComponent,
    ViewClassComponent,
    EnrollClassComponent,
    ViewGradesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
