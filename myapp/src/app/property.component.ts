import { Component } from '@angular/core';

@Component({

    selector: 'app-property',
    template: `
    <h2 *ngIf="username.length > 6; else notfound">{{username}}</h2>
    <ng-template #notfound><h4>Not found any username..!</h4></ng-template>

    <hr>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>

<hr>
<table class="" >
<th>ID</th>
<th>Name</th>
<th>Email</th>
<tr *ngFor="let user of users">
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <table>
         <tr *ngFor="let session of user.sessions">
         <td>{{session.batch}}</td>
         <td>{{session.id}}</td>
         </tr>
    </table>
</tr>
</table>

<hr>
<button type="button" class="btn btn-primary" (click)="contentArea='home'">Home</button>
<button type="button" class="btn btn-danger" (click)="contentArea='about'">About</button>

<div *ngIf="contentArea" [ngSwitch]="contentArea">
    <div *ngSwitchCase="'home'"><h2>This is Home section</h2></div>
    <div *ngSwitchCase="'about'"><h2>This is About section</h2></div>
    <h2 *ngSwitchDefault>Not Found..!</h2>
</div>

<hr>
<div class="col-md-8">
    <div class="card border-dark text-left">
      <div class="card-body">
        
        <h4 class="card-title">Title-area :
            <ng-content select=".title1"></ng-content>
        </h4>
        
        <p class="card-text">Body-area :
            <ng-content select=".body1"></ng-content>
        </p>

      </div>
    </div>
</div>
    `
})

export class PropertyComponent {
    public username = 'Varsha Katkar';
    public contentArea :string;
    public courses: string[] = ['Angular', 'HTML', 'CSS', 'Typescript'];
    public users = [{
        id: 1,
        name: 'Minal',
        email: 'm@g.com'
    },
    {
        sessions: [{
            batch: 'angular',
            id: 123
        },
        {
            batch: 'javascript',
            id: 2123
        },
        {
            batch: 'Bootstrap',
            id: 3123
        }
        ]
    },
    {
        id: 2,
        name: 'varsha',
        email: 'v@g.com'
    },
    {
        id: 3,
        name: 'chandu',
        email: 'c@g.com'
    }
    ]
    constructor() { }
}