import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector : 'app-child',
    template : `
    <div class="container">
    <div class="row">
       <h4>Child area</h4>
    </div>
    <div class="row">
       <p>{{username}}</p>
   </div>
   <button type="button" class="btn btn-danger" (click)="Action()">Click me!</button>
   </div>
    `
})

export class ChildComponent{
@Input() public username : string;
public email : string = "varsha.katkar93@gmail.com";
@Output() public item =new EventEmitter();

constructor(){}

Action(){
    this.item.emit(this.email);
}

}