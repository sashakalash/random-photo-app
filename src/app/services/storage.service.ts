import { Injectable } from '@angular/core';

import { IPhoto } from '../shared/models/photo.interface';
import { PHOTO_LOCAL_STORAGE_KEY } from '../photo-list/constants';

Injectable()
export class StorageService {

  getAllPhotosFromStore(): IPhoto[] {
    return JSON.parse(localStorage.getItem(PHOTO_LOCAL_STORAGE_KEY)) ?? [];
  }

  getFromStoreById(id: string): IPhoto {
    return this.getAllPhotosFromStore().find(photo => photo.id === id);
  }

  savePhotosToStore(photos: IPhoto[]): void {
    localStorage.setItem(PHOTO_LOCAL_STORAGE_KEY, JSON.stringify(photos));
  }

  saveToStore(photo: IPhoto): void {
    const savedPhotos = this.getAllPhotosFromStore();
    savedPhotos.push(photo);
    this.savePhotosToStore(savedPhotos);
  }

  removeFromStore(id: string): void {
    this.savePhotosToStore(this.getAllPhotosFromStore().filter(photo => photo.id !== id));
  }
}
