import { environment } from 'src/environments/environment';
import { IPhoto } from './../models/photo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, concat, delay, forkJoin, Observable, of, repeat, switchMap, tap, zip } from "rxjs";
import { ApiPhotoService } from './api-photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private wrapperHeight_: number = window.innerHeight * 2;
  private initialPhoto: IPhoto = { url: '', width: environment.photo.width, height: environment.photo.width}

  private photosSubject$: BehaviorSubject<IPhoto[]> = new BehaviorSubject([]);
  photos$: Observable<IPhoto[]> = this.photosSubject$.asObservable();

  offsetTop: number;
  isLoading: boolean;

  get photosInRowSum(): number {
    return Math.floor(((window.innerWidth) / 220));
  }

  get innitPhotosInColumnSum(): number {
    return Math.floor((window.innerHeight - this.offsetTop) / 320);
  }

  get initCount(): number {
    return this.innitPhotosInColumnSum * this.photosInRowSum;
  }

  get wrapperHeight(): number {
    return this.wrapperHeight_;
  }

  set wrapperHeight(val: number) {
    this.wrapperHeight_ = val;
  }

  get currentPhotoCount(): number {
    return this.photosSubject$.value.length;
  }

  constructor(private apiPhotoService: ApiPhotoService,
  ) { }

  private addPhotoToList(url: string): void {
    this.photosSubject$.next([...this.photosSubject$.value, {...this.initialPhoto, url }])
  }

  private getCount(height: number): number {
    return height - 320 > 0 ? Math.floor(height / 320) * this.photosInRowSum : this.photosInRowSum;
  }

  getPhotos(height?: number): void {
    this.isLoading = true;

    const count = height ? this.getCount(height) : this.initCount;
    this.apiPhotoService.getRandomPhoto().pipe(
      repeat({ count, delay: 300 }))
      .subscribe(url => this.addPhotoToList(url));
  }

  isScrolledToBottom(): boolean {
    return (window.innerHeight + window.scrollY) >= this.wrapperHeight;
  }

  increaseWrapperHeight(): void {
    this.wrapperHeight += window.innerHeight;
  }

  isLoadingPhotoRequired(height: number): boolean {
    return !this.isLoading && (this.currentPhotoCount < this.initCount + this.getCount(height));
  }
}

