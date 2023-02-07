import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PhotoItemComponent } from './components';
import { FullSizePhotoComponent } from './components/full-size-photo/full-size-photo.component';

const COMPONENTS = [
  PhotoItemComponent,
  FullSizePhotoComponent,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ...COMPONENTS
  ]
})
export class SharedModule { }
