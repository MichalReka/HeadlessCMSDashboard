import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Article } from "../models/article.model";

@Injectable({
    providedIn: 'root',
})
export class ArticlesServices{
    public constructor(private http: HttpClient){}

    public getArticles() : Observable<Article[]>{
        return this.http.get<Article[]>(environment.apiUrl+'api/Articles').pipe(take(1));
    }

    public postArticle(article : Article) : Observable<Article>{
        return this.http.post<Article>(environment.apiUrl+'api/Articles', article).pipe(take(1));
    }
}