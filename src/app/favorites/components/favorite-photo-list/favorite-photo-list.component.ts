import { IPhoto } from '../../../shared/models/photo.interface';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorite-photo-list',
  templateUrl: './favorite-photo-list.component.html'
})
export class FavoritePhotoListComponent implements OnInit {

  photos: IPhoto[];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.photos = this.storageService.getAllPhotosFromStore();
  }

  openPhoto(id: number): void {

  }

}
