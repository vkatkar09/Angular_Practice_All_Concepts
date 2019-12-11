import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productId;
  constructor(private AR : ActivatedRoute) { }

  ngOnInit() {
    this.AR.params.subscribe(data => {
      //console.log(data);
      this.productId = data['id'];
    })
  }

}
