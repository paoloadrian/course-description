import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { CourseService } from '../../services/course.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CourseDetailComponent
  ],
  providers: [
    CourseService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
