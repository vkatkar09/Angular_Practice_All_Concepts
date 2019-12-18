import { Component, OnInit, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
import {map,filter,debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private el : ElementRef) { }

  ngOnInit() {
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
