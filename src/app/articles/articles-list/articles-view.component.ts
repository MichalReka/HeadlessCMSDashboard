import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article.model';
import { ArticlesService } from '../../../core/services/articles.service';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit {

  articles: Article[];
  constructor(private http: HttpClient, private _service : ArticlesService) {   }

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
