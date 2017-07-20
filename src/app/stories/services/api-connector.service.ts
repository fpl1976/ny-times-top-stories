import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import { Story } from 'app/stories/models/Story.model';

const API_KEY = '07b5af4f70f44a2d90d3622186b155be';
const API_URL = 'https://api.nytimes.com/svc/topstories/v2';
const SECTIONS = ['home', 'opinion', 'world', 'national', 'politics'];
const DEFAULT_SECTION = SECTIONS[0];

@Injectable()
export class ApiConnectorService {

  constructor(
    private http: Http) { }

  private selected: Story;

  /* Maps the results array into an array of Story */
  private mapStories(results: any[]): Story[] {
    return results.map(result => {
      const { title, byline: author, short_url: url, published_date: publishedAt } = result;
      const media = result.multimedia.find(m => m.format === "Normal");
      const mediaUrl = media ? media.url : '';
      return new Story(title, author, url, publishedAt, mediaUrl);
    });
  }

  get sections(): string[] {
    return SECTIONS;
  }

  set selectedStory(story: Story) {
    this.selected = story;
  }

  get selectedStory(): Story {
    return this.selected;
  }

  /* Returns the list of stories from the api */
  getStories(section: string): Observable<Story[]> {
    
    section = section || DEFAULT_SECTION;

    return this.http.get(`${API_URL}/${section}.json?api-key=${API_KEY}`)
      .map(response => response.json().results)
      .map(results => this.mapStories(results))
      .distinctUntilChanged();
  }

}
