// [style.color]="isActive ? 'green' : 'orange' "
// [style.fontSize]="isActive ? '45px' : '20px' "
// [class.content]="isActive"
// [class.item]="!isActive"

import {Component} from '@angular/core';
import {Courses} from './courses';

@Component({
    selector : 'app-course',
    template : `
    <h1
    [ngStyle] = "{
        color : isActive ? 'green' : 'orange',
        fontSize : isActive ? '45px' : '20px'
        }"
    (click) = "Action()"
    >{{userName}}</h1>
    <ul>
        <li *ngFor="let course of courseList">
             {{course}}
        </li>
    </ul>

    <div
    [ngClass]="{
        'content' : isActive,
        'item' : !isActive
    }"
    ></div>

    <span class="fa fa-3x"
    (click)="HeartLike()"
    [ngClass]="{
        'fa-heart' : activeHeart,
        'fa-heart-o' : !activeHeart
    }"
    ></span>


    `,
    styles : [`
    h1{
        color : green;
    }
    .content{
        width : 400px;
        height: 400px;
        background-color: teal;
    }
    .item{
        width : 200px;
        height: 200px;
        background-color:yellow;
    }
    
    `]
    
})

export class CourseComponent{
    public isActive : boolean = false;
    public activeHeart : boolean = false;
    public userName : string = 'Varsha Katkar';
    public courseList : Array<string>;
    // public courses : Array<string> = ['Angular','Bootstrap','TypeScript','JavaScript'];
    
    constructor(private course : Courses){
        // never ever use tight coupling.....!
        // let course = new Courses();
        // this.courseList = course.getCourse();
        this.courseList = course.getCourse();
    }

    Action(){
        this.isActive = !this.isActive;
    }

    HeartLike(){
        this.activeHeart = !this.activeHeart; 
    }
}