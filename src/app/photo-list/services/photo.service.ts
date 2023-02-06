import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, combineLatest, concat, delay, forkJoin, Observable, of, switchMap, tap, zip } from "rxjs";
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient,
    private store: Store<{ photos: string[] }>,
  ) { }

  getRandomPhoto(): Observable<string> {
    return this.http.get<string>(environment.api.photo.getRandomPhoto).pipe(
      catchError((er: HttpErrorResponse) => of(er.url))
    )
  }
}
