import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Story } from 'app/stories/models/Story.model';

@Component({
  selector: 'ny-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() story: Story;
  @Output() display = new EventEmitter<Story>(); 
  
  displayStory(): void {
    this.display.emit(this.story);
  }

}
