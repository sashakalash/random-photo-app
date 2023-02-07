import { AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, map, tap, debounceTime } from 'rxjs';
import { IPhoto } from '../../models/photo.interface';

import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('container', { read: ElementRef }) containerRef: ElementRef;

  scrolledHeight: Observable<number>;
  photos$: Observable<IPhoto[]> = this.photoService.photos$;
  isLoading: boolean = this.photoService.isLoading;

  get wrapperHeight(): number {
    return this.photoService.wrapperHeight;
  }

  constructor(private photoService: PhotoService,
  ) { }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    this.photoService.offsetTop = this.containerRef.nativeElement.offsetTop;

    this.scrolledHeight = fromEvent(document, 'scroll').pipe(
      debounceTime(300),
      map(() => (window.pageYOffset || this.containerRef.nativeElement.scrollTop) - (this.containerRef.nativeElement.clientTop || 0)),
      tap(() => {
        if (this.photoService.isScrolledToBottom()) {
          this.photoService.increaseWrapperHeight();
        }
      }),
    )

    this.scrolledHeight.subscribe((height: number) => {
      if (this.photoService.isLoadingPhotoRequired(height)) {
        this.photoService.getPhotos(height)
      }
    });

    this.photoService.getPhotos()
  }

  ngOnInit() {
  }

}

