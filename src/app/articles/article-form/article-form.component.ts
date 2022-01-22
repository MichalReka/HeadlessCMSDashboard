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
  private image : File;


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

  handleFileInput(eventFiles : File[]){
    this.articleForm.get('leadImage').setValue(eventFiles[0]);
  }

  submit(): void{
    this.posting = true;

    let content = this.articleForm.get('content').value;
    let title = this.articleForm.get('title').value;
    let leadImage = this.articleForm.get('leadImage').value;
    const formData = new FormData();
    formData.append('leadImage', leadImage);
    formData.append('title', title);
    formData.append('content', content);

    console.log(formData);

    this._service.postArticle(article).pipe(catchError(er=>{
      this.posting = false;
      return of();
    })).subscribe(article =>{
      this.posting = false;
    })
  }

}
