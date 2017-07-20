import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "app/not-found/not-found.component";

const ROUTES: Routes = [
  { path: '', redirectTo: 'stories', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }, 
  { path: 'notfound', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
