import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, map, tap, debounceTime } from 'rxjs';

import { IPhoto } from '../../../shared/models/photo.interface';
import { PhotoService } from '../../services/photo.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ElementRef }) containerRef: ElementRef;

  scrolledHeight: Observable<number>;
  photos$: Observable<IPhoto[]> = this.photoService.photos$;

  get isLoading(): boolean {
    return this.photoService.isLoading;
  }
  get wrapperHeight(): number {
    return this.photoService.wrapperHeight;
  }

  constructor(private photoService: PhotoService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
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

  addToFavorite(photo: IPhoto): void {
    if (!this.storageService.getFromStoreById(photo.id)) {
      this.storageService.saveToStore(photo);
    }
  }

}

