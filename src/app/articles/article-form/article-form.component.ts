import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from '../../../core/models/article.model';
import { ArticlesServices } from '../../../core/services/articles.services';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  
  public posting : boolean;

  editorConfig: AngularEditorConfig = {
    editable: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Wprowadź treść artykułu',
    defaultParagraphSeparator: '',
    defaultFontSize: '',
    defaultFontName: 'Arial',
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'customClasses',
        'insertVideo',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  }
  
  articleForm : FormGroup;
  constructor(private fb: FormBuilder, private _service : ArticlesServices) { }

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      content: [''],
      title: [''],
      leadImage: [''],
    });
  }

  submit(): void{
    this.posting = true;

    let content = this.articleForm.get('content').value;
    let title = this.articleForm.get('title').value;

    let article = new Article(title, content);

    this._service.postArticle(article).pipe(catchError(er=>{
      this.posting = false;
      return of();
    })).subscribe(article =>{
      this.posting = false;
      console.log(article);
    })
  }

}
