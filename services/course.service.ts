import { Course } from '../models/course';
import { COURSE } from './mock-courses';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CourseService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private coursesUrl = '/course';

  constructor(private http: Http) { }

  getCourse(): Promise<Course> {
    return Promise.resolve(COURSE);
  }

  update(course: Course): Promise<Course> {
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http
      .put(url, JSON.stringify(course), {headers: this.headers})
      .toPromise()
      .then(() => course)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.resolve({status: 200});
  }
}