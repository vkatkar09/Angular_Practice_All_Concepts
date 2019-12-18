import { Component, OnInit, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
import {map,filter,debounceTime} from 'rxjs/operators';
import {UserService} from '../shared/services/user.service';
import {IuserData} from '../shared/model/userData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userData : IuserData[];
  constructor(private el : ElementRef, private userServices : UserService ) { }

  ngOnInit() {

    this.userServices.User()
          .subscribe(data =>{
             this.userData = data;
             console.log(data);
          });



    let searchIn = this.el.nativeElement.querySelector('#search1');
    let observe = fromEvent(searchIn,'keyup')
                        .pipe(map((e:any) => e.target.value),
                              filter(text => text.length >= 4),
                              debounceTime(2000)
                             );

    observe.subscribe(data => {
      console.log(data);
    })
  }

}
