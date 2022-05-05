import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';

export interface CourseElement {
  courseID: number;
  name: string;
  description: string;
}

const ELEMENT_DATA: CourseElement[] = [
  {courseID: 11111, name: 'testing', description: "Lorem Ipsum"}
  
];

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['courseID', 'name', 'description'];
  dataSource = ELEMENT_DATA;


}

