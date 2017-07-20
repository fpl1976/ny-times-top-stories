import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoriesModule } from "app/stories/stories.module";

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionSelectorComponent } from './section-selector/section-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SectionSelectorComponent
  ],
  imports: [
    BrowserModule,
    StoriesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
