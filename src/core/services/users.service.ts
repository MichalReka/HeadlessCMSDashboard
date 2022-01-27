import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { User } from "../models/user.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class UsersService{
    public constructor(private http: HttpClient, private auth: AuthService){}

    public getCurrentUser() : Observable<any>{
        return this.http.get<User>(environment.apiUrl+'api/Users/CurrentUser').pipe(take(1), catchError(er =>{
            this.auth.logout();
            return of();
        }));
    }
}