import { debounceTime, forkJoin, interval, repeat } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, map, Observable, of, switchMap, tap } from 'rxjs';
import { PhotoService } from '../../services/photo.service';
import * as PHOTO_ACTIONS from 'src/app/store/photo/actions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor(private photoService: PhotoService,
    private store: Store,
  ) { }



  ngOnInit() {
    this.photoService.getRandomPhoto().pipe(repeat({ count: 5, delay: 300 }))
      .subscribe(url => this.photos$.next([...this.photos$.value, url]));
  }

}

