import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaFormComponent } from './media-form/media-form.component';
import { MediasListComponent } from './medias-list/medias-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Media'
    },
    children:[
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: MediasListComponent,
        data: {
          title: 'Lista grafik'
        },
      },
      {
        path: 'add',
        component: MediaFormComponent,
        data: {
          title: 'Dodaj grafikę'
        },
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediasRoutingModule {}
