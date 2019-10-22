import {Component} from '@angular/core';
import {Courses} from './courses';

@Component({
    selector : 'app-course',
    template : `
    <h1>{{userName}}</h1>
    <ul>
        <li *ngFor="let course of courseList">
             {{course}}
        </li>
    </ul>
    `,
    styles : [``],
    
})

export class CourseComponent{
    public userName : string = 'Varsha Katkar';
    public courseList : Array<string>;
    // public courses : Array<string> = ['Angular','Bootstrap','TypeScript','JavaScript'];
    
    constructor(private course : Courses){
        // never ever use tight coupling.....!
        // let course = new Courses();
        // this.courseList = course.getCourse();
        this.courseList = course.getCourse();
    }
}