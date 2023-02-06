import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PhotoService } from '../../services/photo.service';
import * as PHOTO_ACTIONS from 'src/app/store/photo/actions';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Observable<string[]> = this.photoService.getPhotos();

  constructor(private photoService: PhotoService,
    private store: Store,
  ) { }

  ngOnInit() {
    this.store.dispatch(PHOTO_ACTIONS.getPhotos());
  }

}
