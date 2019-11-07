import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { Courses } from './courses';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { PropertyComponent } from './property.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ParentComponent,
    ChildComponent,
    PropertyComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
