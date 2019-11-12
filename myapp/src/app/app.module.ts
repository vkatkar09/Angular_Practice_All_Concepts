import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { Courses } from './courses';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { PropertyComponent } from './property.component';
import { UserComponent } from './user.component';
import { ContentPipe } from './content.pipes';
import { CustomDirective } from './custom.directives';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ParentComponent,
    ChildComponent,
    PropertyComponent,
    UserComponent,
    ContentPipe,
    CustomDirective,
    TemplateFormComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
