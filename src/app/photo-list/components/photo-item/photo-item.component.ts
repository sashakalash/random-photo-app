import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent {
  @Input() photo: string = '';

}
