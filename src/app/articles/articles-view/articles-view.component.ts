import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Article } from '../../../core/models/article.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit {

  articles: Article[];
  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
    this.http.get<Article[]>(environment.apiUrl+'api/Articles')
    .pipe(take(1))
    .subscribe(res => {
        this.articles = res.map(article => {
          article.createdDate = new Date(article.createdDate).toLocaleString();
          article.updatedDate = new Date(article.updatedDate).toLocaleString();
          return article;
        });
    });
  }

}
