import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from 'src/app/shared/model/userLogin';
import { UserRegisterServices } from 'src/app/shared/services/user.register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 public Login : FormGroup;
 public submitted = false;
 public validateError : string;
  constructor(private fb : FormBuilder, private userService : UserRegisterServices, private router: Router) { }

  ngOnInit() {
    this.Login = this.fb.group({
      'UserLogin' : this.fb.group({
        'UserName' : ['', [Validators.required]],
        'Password' : ['', [Validators.required]]
      })
    })
  }

  Save(data : Ilogin){
    this.submitted = true;
    if(!this.Login.valid){
      return;
    }
    this.userService.UserLogin(data)
      .subscribe(data => {

        if(data.UserIdentity){
          alert('Login successful..!');
          this.router.navigateByUrl('/home');
          console.log(data);
        }else{
          this.validateError = data.Error;
          console.log(data);
        }
    })

     console.log(data);
  }
}
