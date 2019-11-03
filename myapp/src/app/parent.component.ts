import {Component} from '@angular/core';

@Component({
    selector : 'app-parent',
    template : `
    <div class="container">
     <div class="row">
        <h2>Parent Section: </h2>
        <div class="col">
            <p>{{emailID}}</p>
        </div>
     </div>

     <div class="row">
        <h2>Child Section: </h2>
        <div class="col">
           <app-child [username]="name" (item)=AddEmail($event)></app-child>
       </div>
     </div>

    
    </div>
    `
})

export class ParentComponent{
    public name : string = "Varsha Katkar!";
    public emailID : string 
    constructor(){}
    
    AddEmail(data){
        this.emailID = data;
    }
}