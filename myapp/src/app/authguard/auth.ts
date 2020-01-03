import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({providedIn : 'root'})
export class Authguard implements CanActivate{
    constructor(private router : Router){}
    canActivate(){
        let token = localStorage.getItem('currentUser');
        if(!token){
            alert('Please login first..!');
            this.router.navigateByUrl('/contact');
            return false;
        }else{
         return true;
        }
    }
}