import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPhotoService {

  constructor(private http: HttpClient) { }

  getRandomPhoto(): Observable<string> {
    return this.http.get<string>(environment.photo.getRandomPhotoUri).pipe(
      catchError((er: HttpErrorResponse) => of(er.url))
    )
  }
}
