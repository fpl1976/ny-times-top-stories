import { ActivatedRoute } from '@angular/router';
import { ApiConnectorService } from 'app/stories/services/api-connector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ny-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit {

  sections: string[] = [];
  detailView: boolean;
  
  constructor(
    private apiConnector: ApiConnectorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sections = this.apiConnector.sections;
    this.route.queryParamMap.subscribe(map => this.detailView = !map.get('section'));
  }

}
