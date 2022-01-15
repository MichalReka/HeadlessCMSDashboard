import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/auth/auth.guard';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Artykuły'
    },
    children:[
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ArticlesViewComponent,
        data: {
          title: 'Lista artykułów'
        },
      },
      {
        path: 'add',
        component: ArticleFormComponent,
        data: {
          title: 'Dodaj artykuł'
        },
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
