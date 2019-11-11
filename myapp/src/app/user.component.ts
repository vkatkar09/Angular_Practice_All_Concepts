import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    template : `
    <ul *ngIf="userdeatils" cccardD>
    <li>{{userdeatils.name | uppercase | lowercase}}</li>
    <li>{{userdeatils.price | currency : 'USD' }}</li>
    <li>{{userdeatils.number | number }}</li>
    <li>{{userdeatils.fltno | number : '2.2-2' }}</li>
    <li>{{userdeatils.date |date : 'dd/MM/yyyy' }}</li>
    <li>{{userdeatils | json}}</li>
</ul>

<hr>
<p>{{para | content : '15' }}</p>
    `
})

export class UserComponent{
    public para : string = 'Indias biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Jewelry, Home, Furniture, Sporting goods, Beauty';
    public userdeatils = {
        name : 'Varsha Katkar',
        price : 1452636,
        number : 23456982235,
        fltno : 9.2967546,
        date : new Date()
    };
    constructor(){}
}