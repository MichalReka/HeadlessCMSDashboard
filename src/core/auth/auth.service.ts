import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Tokens } from "../models/tokens.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient, public router: Router) {

    }

    login(name : string, password : string ) {
        this.http.post<Tokens>(environment.apiUrl+'api/Tokens/accesstoken', {name, password})
            .subscribe(res => {
                localStorage.setItem('token', res.accessToken);
                this.router.navigate(['']);
            });
    }       

    logout() {
        localStorage.removeItem("token");
    }

    public isAuthenticated(): boolean {
        let token = localStorage.getItem('token');
        if(token)
        {
            let jwtToken = JSON.parse(atob(token.split('.')[1]));

            // set a timeout to refresh the token a minute before it expires
            let expires = new Date(jwtToken.exp * 1000);
            let isExpired = expires.getTime() != Date.now();
            return isExpired;
        }
        return false;

      }
}