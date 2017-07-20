import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from "app/stories/detail/detail.component";

const routes: Routes = [
  { 
    path: 'stories', 
    component: ListComponent
  }, 
  {
    path: 'detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
