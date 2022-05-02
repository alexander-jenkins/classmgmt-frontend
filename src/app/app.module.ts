import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TitleBarComponent, ActionButtonComponent, StudentHomeComponent, InstructorHomeComponent, AdminHomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
