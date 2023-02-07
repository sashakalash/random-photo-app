import { IPhoto } from '../../shared/models/photo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, repeat } from "rxjs";
import { ApiPhotoService } from './api-photo.service';
import { PHOTO_PARAMS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private wrapperHeight_: number = window.innerHeight * 2;
  private initialPhoto: IPhoto = { id: null, url: '', width: PHOTO_PARAMS.width, height: PHOTO_PARAMS.height }
  private readonly PHOTO_HEIGHT_BORDER_BOX = (PHOTO_PARAMS.height + PHOTO_PARAMS.margin * 2);
  private readonly PHOTO_WIDTH_BORDER_BOX = (PHOTO_PARAMS.width + PHOTO_PARAMS.margin * 2);

  private photosSubject$: BehaviorSubject<IPhoto[]> = new BehaviorSubject([]);
  photos$: Observable<IPhoto[]> = this.photosSubject$.asObservable();

  offsetTop: number;
  isLoading: boolean;

  get photosInRowSum(): number {
    return Math.floor(window.innerWidth / this.PHOTO_WIDTH_BORDER_BOX);
  }

  get innitPhotosInColumnSum(): number {
    return Math.floor((window.innerHeight - this.offsetTop) / this.PHOTO_HEIGHT_BORDER_BOX);
  }

  get initCount(): number {
    return this.innitPhotosInColumnSum * this.photosInRowSum;
  }

  get currentPhotosSum(): number {
    return this.photosSubject$.value.length;
  }

  get wrapperHeight(): number {
    return this.wrapperHeight_;
  }

  set wrapperHeight(val: number) {
    this.wrapperHeight_ = val;
  }

  constructor(private apiPhotoService: ApiPhotoService) { }

  private addPhotoToList(url: string): void {
    const id = `${Math.random() * 10000}`;
    this.photosSubject$.next([...this.photosSubject$.value, { ...this.initialPhoto, url, id }])
  }

  private getCount(height: number): number {
    return (height - this.PHOTO_HEIGHT_BORDER_BOX) > 0
      ? Math.floor(height / this.PHOTO_HEIGHT_BORDER_BOX) * this.photosInRowSum
      : this.photosInRowSum;
  }

  getPhotos(height?: number): void {
    this.isLoading = true;
    const count = height ? this.getCount(height) : this.initCount;
    this.apiPhotoService.getRandomPhoto().pipe(
      repeat({ count, delay: PHOTO_PARAMS.delay }),
      finalize(() => this.isLoading = false)
    )
      .subscribe(url => this.addPhotoToList(url));
  }

  isScrolledToBottom(): boolean {
    return (window.innerHeight + window.scrollY) >= this.wrapperHeight_;
  }

  increaseWrapperHeight(): void {
    this.wrapperHeight_ += window.innerHeight;
  }

  isLoadingPhotoRequired(height: number): boolean {
    return !this.isLoading && (this.currentPhotosSum < this.initCount + this.getCount(height));
  }
}

