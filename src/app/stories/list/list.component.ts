import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Story } from './../models/Story.model';
import { ApiConnectorService } from "app/stories/services/api-connector.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  stories: Story[] = [];
  apiLoader: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiConnector: ApiConnectorService) { }

  private loadStories(section: string): void {
    this.apiLoader = this.apiConnector
      .getStories(section)
      .subscribe(result => this.stories = result);
  }

  detail(story: Story): void {
    const section = this.route.snapshot.queryParams['section'];
    this.router.navigate(['detail'], { queryParams: { url: story.url, from: section } });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(map => {
      const section = map.get('section');
      if (!section)     
        this.router.navigate(['stories'], { queryParams: { section: 'home' } });
      this.loadStories(section);
    })
  }

  ngOnDestroy(): void {
    this.apiLoader.unsubscribe();
  }

}
