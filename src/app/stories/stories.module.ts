import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { MomentModule } from 'angular2-moment/moment.module';
import { StoriesRoutingModule } from './stories-routing.module';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { ApiConnectorService } from "app/stories/services/api-connector.service";
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MomentModule,
    StoriesRoutingModule
  ],
  declarations: [
    ListComponent,
    DetailComponent,
    ListItemComponent
  ],
  providers: [
    ApiConnectorService
  ]
})
export class StoriesModule { }
