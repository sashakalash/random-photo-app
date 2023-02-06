import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent {
  @Input() url: string;
}
