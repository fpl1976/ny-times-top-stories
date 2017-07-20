import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'ny-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  trustedUrl: SafeResourceUrl;
  section: string;

  constructor(
    private route: ActivatedRoute,
  private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.section = this.route.snapshot.queryParamMap.get('from');
    this.trustedUrl  = this.sanitizer.bypassSecurityTrustResourceUrl( 
      this.route.snapshot.queryParamMap.get('url'));
  }

}
