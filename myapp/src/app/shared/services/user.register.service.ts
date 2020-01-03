import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ilogin } from '../model/userLogin';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn : 'root'})
export class UserRegisterServices{
    private loginEndPoint = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public header : HttpHeaders;
    private loggedIn : BehaviorSubject<Ilogin>
    public currentUser : Observable<Ilogin>

    constructor(private http : HttpClient, private router : Router){
        this.header = new HttpHeaders({'Content-Type' :'application/json'});

        this.loggedIn = new BehaviorSubject<Ilogin>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.loggedIn.asObservable();
    }

    
    // get userLoggedIn():Ilogin{
    //     return this.loggedIn.value;
    // }

    UserLogin(data : Ilogin) : Observable<Ilogin>{
        return this.http.post<Ilogin>(this.loginEndPoint, JSON.stringify(data), {headers : this.header}
        ).pipe(map(item =>{
            if(item && item.UserIdentity){
                localStorage.setItem('currentUser', JSON.stringify(item));
                this.loggedIn.next(item); //setting new value to loggedIn : item (new response)
                return item;
            }
            return item;
        }))
    }

    userLogout(){
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/contact')
        this.loggedIn.next(null); //setting new value to loggedIn : null

        // location.reload();
    }
}