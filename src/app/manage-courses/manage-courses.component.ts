import { Component, OnInit } from '@angular/core';

export interface CourseElement {
  courseID: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss'],
})
export class ManageCoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['courseID', 'name', 'description'];
  dataSource = [];
  // dataSource = fetch('http://localhost/course/findall');
}
