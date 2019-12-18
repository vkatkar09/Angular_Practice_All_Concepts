import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IuserData} from '../model/userData';
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class UserService {
    public userEndpoint : string = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private http : HttpClient){}

    User(): Observable<IuserData[]>{
        return this.http.get<IuserData[]>(this.userEndpoint);
    }

}