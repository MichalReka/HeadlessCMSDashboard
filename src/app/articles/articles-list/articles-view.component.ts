import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article.model';
import { ArticlesServices } from '../../../core/services/articles.services';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit {

  articles: Article[];
  constructor(private http: HttpClient, private _service : ArticlesServices) {   }

  ngOnInit(): void {
    this._service.getArticles()
    .subscribe(res => {
        this.articles = res.map(article => {
          article.createdDate = new Date(article.createdDate).toLocaleString();
          article.updatedDate = new Date(article.updatedDate).toLocaleString();
          article.createdBy.createdDate = new Date(article.createdBy.createdDate).toLocaleString();
          return article;
        });
    });
  }

}
