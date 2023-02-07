import { Component, Input,} from '@angular/core';
import { IPhoto } from '../../models/photo.interface';

@Component({
  selector: 'app-photo-item',
  template: `
  <mat-card>
    <img mat-card-image [src]="image?.url" [ngStyle]="{'height': image.height, 'width': image.width}" alt="random-photo">
  </mat-card>
  `,
})
export class PhotoItemComponent {
  @Input() image: IPhoto;
}
