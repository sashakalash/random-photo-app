import { StorageService } from '../../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '../../models/photo.interface';

@Component({
  selector: 'app-full-size-photo',
  template: `
  <div [ngStyle]="{'background-image': 'url(' + photo?.url + ')'}"></div>
  <button mat-raised-button color="warn" (click)="remove()" [style.width]="'100%'">Remove from favorites</button>
  `,
  styles: [`
  div {
    height: 85vh;
    background-repeat: 'no-repeat';
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
  }
  `]
})
export class FullSizePhotoComponent implements OnInit {
  photo: IPhoto;

  constructor(private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.photo = this.storageService.getFromStoreById(this.route.snapshot.paramMap.get('id'));
  }

  remove() {
    this.storageService.removeFromStore(this.photo.id);
    this.router.navigate(['/favorites']);
  }

}
