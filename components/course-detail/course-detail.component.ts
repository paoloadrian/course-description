import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'course-detail',
  templateUrl: 'components/course-detail/course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  originalCourse: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourse()
      .then(course => {
        this.originalCourse = course;
        this.course = JSON.parse(JSON.stringify(course));
      });
  }

  discardAll() {
    this.course = JSON.parse(JSON.stringify(this.originalCourse));
  }

  discardTextbook(index: number) {
    this.course.textbooks[index] = JSON.parse(JSON.stringify(this.originalCourse.textbooks[index]));
  }

  saveAll() {
    this.originalCourse = JSON.parse(JSON.stringify(this.course));
    this.courseService.update(this.originalCourse);
  }

  saveTextbook(index: number) {
    this.originalCourse.textbooks[index] = JSON.parse(JSON.stringify(this.course.textbooks[index]));
    this.courseService.update(this.originalCourse);
  }

  goBack(): void {
    window.history.back();
  }
}