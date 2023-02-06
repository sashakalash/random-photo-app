import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, delay, Observable, zip } from "rxjs";
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient,
    private store: Store<{ photos: string[] }>,
  ) { }

  private getRandomPhoto(): Observable<string> {
    return this.http.get<string>(environment.api.photo.getRandomPhoto).pipe(delay(300));
  }

  getPhotos(): Observable<string[]> {
    return combineLatest([this.getRandomPhoto(), this.getRandomPhoto(), this.getRandomPhoto()]);
  }
}
