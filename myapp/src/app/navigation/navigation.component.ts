import { Component, OnInit } from '@angular/core';
import { UserRegisterServices } from '../shared/services/user.register.service';
import { Ilogin } from '../shared/model/userLogin';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  public userName;
  constructor(private userServices : UserRegisterServices ) { }

  ngOnInit() {
     this.userServices.currentUser.subscribe(x => {
       this.userName = x;
     })
  }

  Logout(){
    this.userServices.userLogout();
  }

}
